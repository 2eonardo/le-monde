import React from "react";
import {
    AccountButtons,
    LanguagesSwitcher,
    MainLogo,
    MenuButton,
    NewsPaperButton,
    ServicesButton
} from "../UI/HeaderElements.jsx";
import './UpperHeader.css';

export function UpperHeader() {
    return(<div className="upper-header">
        {/* SINISTRA: Journal e Services */}
        <div className="left-header">
            <NewsPaperButton />
            <ServicesButton />
        </div>
        {/* Sezione a comparsa max-width 1024px:*/}
        <MenuButton iconUrl={"https://placehold.co/40x40/666666/ffffff?text=MS"}/>
        {/* CENTRO: Logo principale */}
        <div className="center-header">
            <MainLogo />
        </div>
        {/* DESTRA: Lingua e Abbonamento */}
        <div className="right-header">
            <LanguagesSwitcher />
            <AccountButtons />
        </div>
    </div>);
}