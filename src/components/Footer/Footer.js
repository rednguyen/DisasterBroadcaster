import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <div className="main-footer">
            <div className = "container"> 
                <div className = "row">
                    <p className = "col-sm">
                        Copyright &copy;{new Date().getFullYear()} DISASTER BROADCASTER
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer