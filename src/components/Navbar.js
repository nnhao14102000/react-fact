import React from "react";
import reactLogo from "../images/logo192.png";

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} className="nav--icon"/>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}