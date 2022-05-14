import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <>
            <div className="h-16 flex justify-between items-center">
                <div>
                    <ul className="nav_menu">
                        <NavLink to="/"> <li>Overview</li> </NavLink>
                        <NavLink to="/"> <li>My Loan</li> </NavLink>
                        <NavLink to="/"> <li>Statement</li> </NavLink>
                        <NavLink to="/"> <li>Company Details</li> </NavLink>
                    </ul>
                </div>
                <div>
                    <ul className="nav_icons">
                        <li>العربية</li>
                        <li>
                            <FontAwesomeIcon icon={faBell} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faUser} />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
