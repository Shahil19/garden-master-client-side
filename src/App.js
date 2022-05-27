
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Footer from './Pages/Shared/Footer';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Registration/Login';

function App() {
  console.log(process.env.REACT_APP_name);
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='purchase' element={<Purchase></Purchase>} ></Route>
        <Route path='login' element={<Login></Login>} ></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
