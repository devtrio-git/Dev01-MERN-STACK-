import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <Link to="/"  className="nav-link" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li> */}
                            <li className="nav-item">
                                <NavLink to="/"  className={({isActive})=> isActive ?"nav-link nav-active": "nav-link"} aria-current="page" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about"  className={({isActive})=> isActive ?"nav-link nav-active": "nav-link"} >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact"  className={({isActive})=> isActive ?"nav-link nav-active": "nav-link"} >Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products"  className={({isActive})=> isActive ?"nav-link nav-active": "nav-link"} >Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/auth/login"  className={({isActive})=> isActive ?"nav-link nav-active": "nav-link"} >Login</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
