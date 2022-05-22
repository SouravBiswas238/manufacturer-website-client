import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Shered/Footer';
import Navigation from './components/Shered/Navigation';

function App() {
  return (
    <div className=''>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
