import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Purchase from './components/Purchase/Purchase';
import Footer from './components/Shered/Footer';
import Login from './components/Shered/Login';
import Navigation from './components/Shered/Navigation';
import NorFound from './components/Shered/NorFound';
import RequreAuth from './components/Shered/RequreAuth';
import SignUp from './components/Shered/SignUp';

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

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />


        <Route path='*' element={<NorFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
