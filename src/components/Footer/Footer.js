import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
            <div className = "row">
                <p className = "col-sm">
                    Copyright &copy;{new Date().getFullYear()} DISASTER BROADCASTER
                </p>
                <p className = "col-sm">
                    Hello Oke
                </p>
            </div>
    )
}

export default Footer