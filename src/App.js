import { Route, Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './components/Home/Home';
import Purchase from './components/Purchase/Purchase';
import PurchaseDetail from './components/Purchase/PurchaseDetail';
import Footer from './components/Shered/Footer';
import Login from './components/Shered/Login';
import Navigation from './components/Shered/Navigation';
import NorFound from './components/Shered/NorFound';
import RequreAuth from './components/Shered/RequreAuth';
import SignUp from './components/Shered/SignUp';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import AddReview from './components/Dashboard/AddReview';
import MyProfile from './components/Dashboard/MyProfile';
import MakeAdmin from './components/Dashboard/MakeAdmin';
import AddProduct from './components/Dashboard/AddProduct';

function App() {
  return (
    <div className=''>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

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
          <Route index element={<MyOrders />}></Route>
          <Route path='review' element={<AddReview />}></Route>
          <Route path='profile' element={<MyProfile />}></Route>
          <Route path='make-admin' element={<MakeAdmin />}></Route>
          <Route path='add-product' element={<AddProduct />}></Route>
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
