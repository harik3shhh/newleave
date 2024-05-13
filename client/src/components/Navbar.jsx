import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/auth';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [auth, setAuth] = useAuth();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ''
        });
        localStorage.removeItem('auth');
        toast.success('Logout Successful!!!');
    };

    return (
        <>
            <nav
                className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${
                    visible ? '' : 'navbar-hidden'
                }`}
            >
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        GET LEAVE
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                    style={{ backgroundColor: 'transparent' }}
                                >
                                    HOME
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {auth.user ? (
                                    <NavLink
                                        className="nav-link active"
                                        to="/leave-request"
                                        style={{ backgroundColor: 'transparent', marginLeft: '20px', cursor: 'pointer' }}
                                    >
                                        APPLY FOR LEAVE
                                    </NavLink>
                                ) : null}
                            </li>
                            <li className="nav-item">
                                {auth.user && auth.user.role === 1 ? (
                                    <NavLink
                                        className="nav-link"
                                        to="/admin"
                                        style={{ backgroundColor: 'transparent', color: 'yellow', marginLeft: '20px', cursor: 'pointer' }}
                                    >
                                        ADMIN
                                    </NavLink>
                                ) : null}
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ backgroundColor: 'transparent', marginLeft: '20px' }}
                                >
                                    PROFILE
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink className="dropdown-item" to="/profile">
                                             Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/myrequest">
                                            Leave Status
                                        </NavLink>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    {!auth.user ? (
                                        <>
                                            <li>
                                                <NavLink className="dropdown-item" to="/login">
                                                    Login
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="dropdown-item" to="/register">
                                                    Register
                                                </NavLink>
                                            </li>
                                        </>
                                    ) : (
                                        <li>
                                            <NavLink
                                                className="dropdown-item"
                                                to="/"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </NavLink>
                                        </li>
                                    )}
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                    style={{ backgroundColor: 'white', borderRadius: '8px', color: '#068EE7' }}
                                >
                                    WELCOME {auth.user ? auth.user.name.toUpperCase() : 'GUEST'}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
