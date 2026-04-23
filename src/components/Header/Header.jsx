import React, { useState, useEffect, useRef } from 'react';import './Components/UpperHeader.css';
import {NavBar, UpperHeader} from "./Components/components.jsx";
import {StickyBar} from './Components/StickyBar.jsx';
import Services from "./Components/Services.jsx";
import Menu from "./Components/Menu.jsx";
import './Components/StickyBar.css'


export default function Header() {
    const [isStickyVisible, setIsStickyVisible] = useState(false);
    const sentinelRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            // Appare quando la sentinella (in fondo all'header) esce dal viewport
            setIsStickyVisible(!entry.isIntersecting);
        }, { threshold: [0] });

        if (sentinelRef.current) observer.observe(sentinelRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <StickyBar isVisible={isStickyVisible} />

            <header className="main-header" role="banner">
                <UpperHeader />
                <NavBar/>
                <Services />
                <Menu />

                <div ref={sentinelRef} style={{position: 'absolute', bottom: '0', height: '1px', width: '100%', visibility: 'hidden'}}/>

            </header>
        </>
    );
}