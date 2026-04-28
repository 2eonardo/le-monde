import { useState, useEffect, useRef } from 'react';

export const useStickyHeader = () => {
    const [isStickyVisible, setIsStickyVisible] = useState(false);
    const sentinelRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsStickyVisible(!entry.isIntersecting);
        }, { threshold: [0] });

        if (sentinelRef.current) observer.observe(sentinelRef.current);

        return () => observer.disconnect();
    }, []);

    return { isStickyVisible, sentinelRef };
};