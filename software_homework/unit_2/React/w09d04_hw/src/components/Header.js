import { Link } from "react-router-dom";
import React from "react";

export default function Header(props){
    return(
        <div className="nav">
            <Link to="/">
                <div className="nav-item">Home</div>
            </Link>
            <Link to="/stocks">
                <div className="nav-item">Dashboard</div>
            </Link>
            <Link to="/about">
                <div className="nav-item">About</div>
            </Link>
        </div>
    )
}