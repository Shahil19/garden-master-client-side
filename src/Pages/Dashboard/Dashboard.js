import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl text-bold text-center'>Welcome to Dashboard</h2>
                <Outlet />
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/myreviews'>My Review</Link></li>
                    <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                    {/* <li><Link to='/dashboard/manageorders'>Manage All Orders</Link></li> */}
                    <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                    <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;