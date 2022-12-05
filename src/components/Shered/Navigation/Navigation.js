import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useScrollPosition } from '../../../hook/useScrollPosition '
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Navigation.css'

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const scrollPosition = useScrollPosition()
    console.log(scrollPosition)

    const handelProfile = () => {

    }
    const active = 'flex items-center px-4  hover:border-b-4 border-[#f7c02d] border-transparent font-semibold text-[15px] text-[#f7c02d] hover:text-[#f7c02d]'
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

            <div className="container flex justify-between h-16 mx-auto">
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
                            <Link className='my-button-1 hover:bg-transparent' to="/login">Login</Link>
                    }
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>




            {/* <div class="navbar bg-primary text-white text-bold">
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
            </div> */}

            {/* external */}
        </header>




    );
};

export default Navbar;