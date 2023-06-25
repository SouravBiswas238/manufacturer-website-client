import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useScrollPosition } from '../../../hook/useScrollPosition '
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Navigation.css'
import { useState } from 'react';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    const [show, setShow] = useState(false)
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const scrollPosition = useScrollPosition()

    const handelProfile = () => {

    }
    const active = 'flex items-center  px-4  hover:border-b-4 border-[#f7c02d] border-transparent font-semibold text-[15px] text-[#f7c02d] hover:text-[#f7c02d]'
    const deActive = 'flex items-center px-4  hover:border-b-4 border-[#f7c02d] border-transparent  text-white  font-semibold text-[15px]  hover:text-[#f7c02d]'

    const menuItems = <>
        <li className='flex'> <NavLink className={({ isActive }) => (isActive ? active : deActive)} to="/home">Home</NavLink></li>
        <li className="flex"> <NavLink className={({ isActive }) => (isActive ? active : deActive)} to="/my-blogs">Blogs</NavLink></li>
        <li className='flex'> <NavLink className={({ isActive }) => (isActive ? active : deActive)} to="/portfolio">My Portfolio</NavLink></li>

        <li className='flex'> {
            user && <NavLink className={({ isActive }) => (isActive ? active : deActive)} to="/dashboard">Dashboard</NavLink>
        }</li>

        <li className='flex'> {
            user && <NavLink className={({ isActive }) => (isActive ? active : deActive)} to='/dashboard/profile' >{user?.displayName}</NavLink>
        }</li>
    </>
    const nameLatter = user?.displayName?.charAt(0);

    return (





        <header className={classNames(
            scrollPosition > 0 ? ' bg-black ease-in duration-150 ' : '  bg-transparent pt-[30px] ease-in duration-300',
            'px-4 sticky top-0 z-20  transition',
        )}>

            <div className="container flex justify-between h-16 mx-auto overly ">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <Link to='/'> <img src='http://demo2.steelthemes.com/induscity/wp-content/themes/induscity/img/logo-light.png' alt="logo" /></Link>
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    {menuItems}
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {
                        user ?
                            <button onClick={logOut} className='my-button-2 hover:bg-[#f7c02d] hover:border-0 transition duration-150 ease-in '>Sign Out</button> :
                            <Link className='my-button-1 hover:bg-transparent hover:text-white' to="/login">Login</Link>
                    }
                </div>
                <button className="p-3 lg:hidden ">
                    {

                        !show ? <label htmlFor="my-drawer-4" onClick={() => setShow(!show)} className="btn btn-sm  drawer-button ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6  text-gray-100 focus:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label> :
                            <label htmlFor="my-drawer-4" onClick={() => setShow(!show)} className="btn btn-sm  drawer-button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className=" flex-shrink-0  w-6 h-6">
                                    <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                                </svg>
                            </label>


                    }
                </button>
            </div>



            {
                show ? <div className={classNames(
                    scrollPosition > 0 ? ' ease-in duration-150  bg-black nav-bar-shadow' : ' top-[100px] bg-gray-700 nav-bar-shadow ease-in duration-300',
                    'lg:hidden  ease-in-out duration-300  absolute z-40 right-0   rounded',
                )}>
                    <ul className="menu p-4 w-80  ease-in-out duration-300   text-center  flex justify-center">
                        {menuItems}

                    </ul>
                    <ul className='text-center text-white py-5 '>
                        {
                            user ?
                                <button onClick={logOut} className='px-10 py-3 border-2 rounded border-yellow hover:bg-transparent hover:text-white   transition duration-150 ease-in '>Sign Out</button> :
                                <Link className='px-10 py-3 border-2 rounded border-[#f7c12d80] hover:text-white ' to="/login">LOGIN</Link>
                        }
                    </ul>


                </div> :
                    <div className="lg:hidden  ease-in-out duration-300  absolute z-40 drawer-animation-uncheck top-[100px]">

                        <ul className="menu p-4 w-80  ease-in-out duration-300 h-[72vh] bg-gray-800">
                            {menuItems}

                        </ul>
                    </div>
            }
        </header>












    );
};

export default Navbar;