import React from 'react';
import { NavLink } from "react-router-dom";
import "./headerNav.css";

const headerNav = (props) => (
    <div>
        <header><h1>Ranker</h1></header>
        <nav>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/submit">Submit</NavLink></li>
                <li><NavLink to="/vote">Vote</NavLink></li>
                <li><NavLink to="/chart">Chart</NavLink></li>
            </ul>
        </nav>
    </div>
);

export default headerNav;
