import React from 'react';
import './Section/UpperHeader.css';
import {UpperHeader} from "./Section/UpperHeader.jsx";
import {NavBar} from "./Section/NavBar.jsx";
import {StickyBar} from './Section/StickyBar.jsx';
import Services from "./Overlays/Services.jsx";
import Menu from "./Overlays/Menu.jsx";
import './Header.css';
import {useStickyHeader} from "../hooks/useStickyHeader.jsx";

export default function Header() {

    const { isStickyVisible, sentinelRef } = useStickyHeader();

    return (
        <>
            <header className="main-header" role="banner">
                <UpperHeader />
                <Services />
                <Menu />
                <NavBar/>

                <div ref={sentinelRef} style={{position: 'absolute', bottom: '0', height: '1px', width: '100%', visibility: 'hidden'}}/>

            </header>
            <StickyBar isVisible={isStickyVisible} />
        </>
    );
}