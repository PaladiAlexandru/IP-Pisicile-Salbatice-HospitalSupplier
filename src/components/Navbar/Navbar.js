import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar=() => {
    return(
        <nav className="navbar navbar-expand-lg navbar-mainbg">

            <NavLink className="navbar-brand navbar-logo" to="/" exact>
                Hospital Supplier
            </NavLink>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" 
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars text-white">

            </i>

            </button>
            <div 
            className="collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector">
                    <div className="left">

                    </div>
                    <div className="right">

                    </div>
                    <li className="nav-item active">
                        <NavLink className="nav-link"
                        to="/Home" exact>
                            <i className="fas fa-tachometer-alt">

                            </i> Home
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link"
                        to="/Oferta" exact>
                            <i className="fas fa-adress-book">

                            </i> Oferta
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link"
                        to="/Cerere" exact>
                            <i className="fas fa-clone">

                            </i> Cerere
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link"
                        to="/MesajeGuvern" exact>
                            <i className="fas fa-chart-bar">

                            </i> Mesaje Guvern
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link"
                        to="/IstoricComenzi" exact>
                            <i className="fas fa-copy">

                            </i> Istoric Comenzi
                        </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink className="nav-link"
                        to="/IstoricAprovizionariGuvern" exact>
                            <i className="fas fa-copy">

                            </i> Istoric Aprovizionari Guvern
                        </NavLink>
                    </li>

                </div>
            </ul>
            </div>

        </nav>

    );
}
export default Navbar;