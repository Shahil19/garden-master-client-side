
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Registration/Login';
import SignUp from './Pages/Registration/SignUp';
import RequireAuth from './Pages/Shared/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReview from './Pages/Dashboard/MyReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddReview from './Pages/Dashboard/AddReview';
import NotFound from './Pages/Shared/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';

import AddProduct from './Pages/Dashboard/AddProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import { ToastContainer } from 'react-toastify';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Blog from './Pages/Blogs/Blog';
import UpdateProfile from './Pages/Dashboard/UpdateProfile';
import RequireAdmin from './Pages/Shared/RequireAdmin';


function App() {
  console.log(process.env.REACT_APP_name);
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='purchase/:id' element={<RequireAuth><Purchase /></RequireAuth>} ></Route>
        <Route path='login' element={<Login></Login>} ></Route>
        <Route path='signup' element={<SignUp></SignUp>} ></Route>
        <Route path='portfolio' element={<MyPortfolio></MyPortfolio>} ></Route>
        <Route path='blogs' element={<Blog></Blog>} ></Route>

        <Route path="updateprofile" element={<UpdateProfile />} />

        <Route path='dashboard' element={<Dashboard></Dashboard>} >
          <Route path="myorders" element={<MyOrders />} />
          <Route path="myreviews" element={<MyReview />} />
          <Route path="addreview" element={<AddReview />} />

          <Route index element={<MyProfile />} />

          <Route path="manageproducts" element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
          <Route path="manageorders" element={<RequireAdmin><ManageOrders /></RequireAdmin>} />
          <Route path="addproduct" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path="makeadmin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
