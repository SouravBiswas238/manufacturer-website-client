import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../img/logo.png'

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    const handelProfile = () => {

    }

    const menuItems = <>
        <li> <Link to="/home">Home</Link></li>
        <li> <Link to="/my-blogs">Blogs</Link></li>
        <li> <Link to="/portfolio">My Portfolio</Link></li>

        <li> {
            user && <Link to="/dashboard">Dashboard</Link>
        }</li>

        <li> {
            user && <Link to='/dashboard/profile' className='btn btn-ghost'>{user.displayName}</Link>
        }</li>
    </>
    const nameLatter = user?.displayName?.charAt(0);

    return (
        <div>

            <div class="navbar bg-primary text-white text-bold">
                <div class="hidden lg:flex">
                    <Link to='/'> <img className='w-[70px] h-[50px]' src={logo} alt="logo" /></Link>
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>


                <div className="lg:flex-1 w-4/5 dropdown bg-primary  ">
                    <label tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="1" className=" bg-primary menu menu-compact dropdown-content pt-5 mt-2 w-full">
                        {menuItems}
                    </ul>
                </div>


                <div class="lg:flex-none  gap-2">
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                {
                                    user ? (user?.photoURL ? <img src={user?.photoURL} alt='userPhoto' /> : <span class="text-3xl">{nameLatter}</span>) : <FontAwesomeIcon icon={faUserLarge} size='2x' />

                                }
                            </div>
                        </label>
                        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-primary rounded-box w-52">
                            <li> {
                                user && <Link to='/dashboard/profile' className='btn btn-ghost'>{user.displayName}</Link>
                            }</li>
                            <li> {
                                user && <Link to='/dashboard/profile' className='btn btn-ghost'>Settings</Link>
                            }</li>

                            < li > {
                                user ?
                                    <button onClick={logOut} className='btn btn-ghost'>Sign Out</button> :
                                    <Link to="/login">Login</Link>
                            }</li>
                        </ul>
                    </div>
                </div>
            </div>




            {/* 
            <div className="navbar bg-primary text-white text-bold ">

                <div className="navbar-start dropdown bg-primary   ">
                    <label tabIndex="1" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="1" className=" bg-primary menu menu-compact dropdown-content pt-5 mt-2 w-full">
                        {menuItems}
                    </ul>
                </div>

                <div className="flex-none  hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}

                    </ul>
                </div>
                <div className="sm:navbar-end  ">
                </div>

            </div> */}


        </div>
    );
};

export default Navbar;