import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user)
    console.log(admin);
    if (adminLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl text-bold text-center mt-5 mb-10'>Welcome to Dashboard</h2>
                <Outlet />
            </div>

            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {
                        !admin && <>
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        </>
                    }

                    <li><Link to='/dashboard'>My Profile</Link></li>

                    {
                        admin && <>
                            <li><Link to='/dashboard/manageproducts'>Manage All Products</Link></li>
                            <li><Link to='/dashboard/manageorders'>Manage Orders</Link></li>
                            <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                            <li><Link to='/dashboard/makeadmin'>Make Admin</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;