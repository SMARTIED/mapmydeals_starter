import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <nav className="bg-primary p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="MapMyDeals Logo" className="h-10 mr-4" />
        <h1 className="font-bold text-xl text-white">MapMyDeals</h1>
      </div>
      <div className="space-x-4 text-white">
        <Link to="/">Home</Link>
        <Link to="/deals">Deals</Link>
        <Link to="/map">Map</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
}
