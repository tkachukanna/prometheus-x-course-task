import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LocalStorageService, LS_KEYS } from "../../services/localStorage";
import "./header.css";
import { Navbar } from "./Navbar";

export const Header = () => {

    const location = useLocation();

    return (
        <header className="header">
            <Link to="/books" className="header__title">JS BAND STORE / Anna Tkachuk</Link>
            {
                location.pathname !== '/' && <Navbar />
            }
        </header>
    )

}