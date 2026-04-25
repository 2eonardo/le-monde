import React from "react";
import {AccountButtons, MenuButton, NavList} from "../UI/HeaderElements.jsx";
import { UpperHeader} from "./UpperHeader.jsx"
import './StickyBar.css'

export function StickyBar({ isVisible }) {
    if (!isVisible) return null;

    return (
        <div className="sticky-bar-container">
            <div className="regular-display">
                <div className="center-bar">
                    <img src="https://placehold.co/40x40/666666/ffffff?text=M" alt="" aria-hidden="true" />
                    <MenuButton iconUrl={"https://placehold.co/40x40/666666/ffffff?text=MS"}/>
                    <NavList />
                </div>
                <AccountButtons />
            </div>
            <div className ="tablet-display">
                <UpperHeader />
            </div>
        </div>
    );
}