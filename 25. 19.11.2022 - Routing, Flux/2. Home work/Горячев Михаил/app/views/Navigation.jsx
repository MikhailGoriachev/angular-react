import {NavLink} from "react-router-dom";
import React from "react";

// import logo from "../images/icon.svg";
import {Nav, Navbar} from "react-bootstrap";

// навигационный компонент 
export function Navigation() {  

    let activeClass = ({isActive}) => `nav-link mx-3 ${isActive ? 'active' : ''}`;
    return (
            <Navbar className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top shadow">
                <NavLink className="navbar-brand ms-4" to='/'>
                    <img className="logo" src='../../images/icon.svg' alt="logo"/>
                </NavLink>
                <Nav>
                    <Nav.Item>
                        <NavLink className={activeClass} to='/'>
                            Главная
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink className={activeClass} to='/appointments'>
                            Медицинские приёмы
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar>
    );
}