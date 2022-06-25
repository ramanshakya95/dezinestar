import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';
import logo from '../../assets/svg/logo.svg';
import hire from '../../assets/svg/hire.svg';

const Header = () => {
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
    return (
        <>
            <header className={click ? "main-container" : ""} onClick={() => Close()}>
                <nav className="navbar" onClick={e => e.stopPropagation()}>
                    <div className="nav-container">
                        <NavLink exact to="/" className="nav-logo">
                            <img src={logo} alt='logo' />
                        </NavLink>
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/about"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/services"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/our-work"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Our Work
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/career"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Career
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/review"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                                    Review
                                </NavLink>
                            </li>
                            <li className='nav-item hireme'>
                                <a href="#/" className='nav-links hireme-btn'> <img src={hire} alt='hire' /> Hireme</a>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                            <i className={click ? "fa fa-times" : "fa fa-bars"}>click</i>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;