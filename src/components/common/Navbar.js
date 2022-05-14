import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <div className="h-16 flex justify-between items-center">
                <div>
                    <ul className="nav_menu">
                        <NavLink to="/" activeClassName="text-red-700"> <li>Overview</li> </NavLink> 
                        <NavLink to="/" activeClassName="text-red-700"> <li>My Loan</li> </NavLink> 
                        <NavLink to="/" activeClassName="text-red-700"> <li>Statement</li> </NavLink> 
                        <NavLink to="/" activeClassName="text-red-700"> <li>Company Details</li> </NavLink> 
                    </ul>
                </div>
                <div>
                    <ul className="nav_menu">
                        <li>Arabi</li>
                        <li>Bell</li>
                        <li>Profile</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
