import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg'

const Navbar = () => {


    const menuItems = <>
        <li> <Link to="/home">Home</Link></li>
        <li> <Link to="/appointment">Appointment</Link></li>
        <li> <Link to="/about">About</Link></li>
        <li> <Link to="/reviews">Reviews</Link></li>
        <li> <Link to="/contact">Contact Us</Link></li>



    </>
    return (
        <div>
            <div className="navbar bg-primary text-white text-bold ">
                <div className="navbar-start ">
                    <Link to='/' className="px-3 ">
                        <img className='w-[50px]' src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}

                    </ul>
                </div>
                <div className="navbar-end dropdown bg-primary text-right ">
                    <label tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="1" className=" bg-primary menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Navbar;