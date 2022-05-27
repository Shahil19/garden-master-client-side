
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

function App() {
  console.log(process.env.REACT_APP_name);
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='purchase' element={<RequireAuth><Purchase /></RequireAuth>} ></Route>
        <Route path='login' element={<Login></Login>} ></Route>
        <Route path='signup' element={<SignUp></SignUp>} ></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>} >
          <Route index element={<MyOrders />} />
          <Route path="myreviews" element={<MyReview />} />
          <Route path="profile" element={<MyProfile />} />
          {/* <Route path="team" element={<Team />} /> */}
        </Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
