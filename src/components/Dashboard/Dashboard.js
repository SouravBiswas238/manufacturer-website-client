import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hook/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);

    const [admin] = useAdmin(user);

    return (
        <div className="drawer drawer-mobile ">
            <input id="dashBoard-sidebar" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content text-center">
                <h2 className=' text-2xl font-bold my-5 text-purple-500'>Welcome to Dashboard!</h2>
                <Outlet></Outlet>
            </div>

            <div className="drawer-side">
                <label for="dashBoard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard/profile">My Profile</Link></li>

                    {
                        !admin && <>
                            <li><Link to="/dashboard/order">My Orders</Link></li>
                            <li><Link to="/dashboard/review">My Reviews</Link></li>
                        </>
                    }
                    {
                        admin && <>
                            <li><Link to="/dashboard/make-admin">Make admin</Link></li>
                            <li><Link to="/dashboard/add-product">Add A Product</Link></li>
                            <li><Link to="/dashboard/manage-product">Manage Products</Link></li>
                            <li><Link to="/dashboard/manage-order">Manage all Order</Link></li>
                        </>
                    }

                </ul>
            </div>
        </div>




    );
};

export default Dashboard;