import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Jungle Clicky Game</h1>
                <p>Click an image to earn points be sure not to click on the same image twice.</p>
            </div>
        )
    }
}
export default Header;