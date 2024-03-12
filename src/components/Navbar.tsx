import React from 'react';
import logo from '../assets/imgs/logo.png';
import Vector from '../assets/imgs/Vector.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-black p-3">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">
                    <img src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">SERVICES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">PORTFOLIO</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link">ABOUT US</a>
                        </li>
                    </ul>
                    <Link to="/" className="btn btn-outline-dark fw-bold d-flex gap-3" type="submit">CONTACT US
                        <img src={Vector} alt="" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
