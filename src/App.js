import { Route, Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './components/Home/Home';
import Purchase from './components/Purchase/Purchase';
import PurchaseDetail from './components/Purchase/PurchaseDetail';
import Footer from './components/Shered/Footer';
import Login from './components/Shered/Login';
import Navigation from './components/Shered/Navigation/Navigation';
import NorFound from './components/Shered/NorFound';
import RequreAuth from './components/Shered/RequreAuth';
import SignUp from './components/Shered/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/User/Dashboard';
import MyOrders from './components/Dashboard/User/MyOrders';
import AddReview from './components/Dashboard/User/AddReview';
import MyProfile from './components/Dashboard/User/MyProfile';
import AddProduct from './components/Dashboard/Admin/AddProduct';
import ManageAllPro from './components/Dashboard/Admin/ManageAllPro';
import ManageAllOrder from './components/Dashboard/Admin/ManageAllOrder';
import MyPortfolio from './components/Home/MyPortfolio';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin';
import Blogs from './components/Home/Blogs';

function App() {
  return (
    <div className='bg-black'>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my-blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<MyPortfolio />} />

        <Route path='/purchase' element={
          <RequreAuth>
            <Purchase></Purchase>
          </RequreAuth>
        }></Route>

        <Route path='/purchase/:purchaseId' element={
          <RequreAuth>
            <PurchaseDetail></PurchaseDetail>
          </RequreAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequreAuth>
            <Dashboard></Dashboard>
          </RequreAuth>
        }>
          {/* <Route index element={<Dashboard />}></Route> */}

          <Route path='review' element={<AddReview />}></Route>
          <Route path='order' element={<MyOrders />}></Route>
          <Route path='add-product' element={<AddProduct />}></Route>
          <Route path='profile' element={<MyProfile />}></Route>
          <Route path='make-admin' element={<MakeAdmin />}></Route>
          <Route path='manage-product' element={<ManageAllPro />}></Route>
          <Route path='manage-order' element={<ManageAllOrder />}></Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />


        <Route path='*' element={<NorFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
