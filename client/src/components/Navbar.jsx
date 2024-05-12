import React from 'react';
import { useAuth } from '../context/auth';
import {toast} from "react-toastify"

const Navbar = () => {
    const [auth, setAuth] = useAuth();


    const handleLogout = () => {
        setAuth({
          ...auth,
          user: null,
          token: ""
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successful!!!");
      };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/leave-request">Apply</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/admin">ADMIN</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </a>
                                <ul className="dropdown-menu">

                                

                                    <li><a className="dropdown-item" href="#">Edit Profile</a></li>
                                    <li><a className="dropdown-item" href="/myrequest">Leave Status</a></li>
                                    <li><hr className="dropdown-divider" /></li>

                                    {
                                    !auth.user ? (
                                        <>
                                    <li><a className="dropdown-item" href="/login">Login</a></li>
                                    <li><a className="dropdown-item" href="/register">Register</a></li>
                                    </>
                                        ) : (                   

                                    <li><a className="dropdown-item" href="/" onClick={handleLogout}>Logout</a></li>
                                )
                            }
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
