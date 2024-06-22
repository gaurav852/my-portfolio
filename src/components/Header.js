import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return(
        <div className="main-frame">
            <div className="left-container">
                <h3 onClick={() => navigate('/')}>Gaurav Kumar Singh</h3>
            </div>
            <div className="right-container">
                <h4 onClick={() => navigate('/about')}>About</h4>
                <h4 onClick={() => navigate('/exp')}>Experience</h4>
                <h4 onClick={() => navigate('/projects')}>Projects</h4>
                <h4 onClick={() => navigate('/contact')}>Contact</h4>
            </div>
        </div>
    )
}

export default Header;