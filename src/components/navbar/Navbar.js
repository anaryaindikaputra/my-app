import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="category">Category</Link></li>
        </ul>
    </div>
  )
}

export default Navbar;