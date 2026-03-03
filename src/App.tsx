import { Routes, Route, useLocation  } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AnimatedPage from './components/AnimatedPage';
import Main from './pages/Main';
import Footer from './components/Footer';
import TestShop from './pages/TestShop';
import { AnimatePresence } from 'motion/react';


function App() {
  const location = useLocation()
  return (
    <div>

      <Navbar/>
      <div className="h-[80px]"></div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<AnimatedPage><Main /></AnimatedPage>} />
          <Route path='/portfolio-project' element={<AnimatedPage><Main /></AnimatedPage>} />
          <Route path='/shop-example' element={<AnimatedPage><TestShop /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
      {/* <Link to={location.pathname === '/' ? "/shop-example":"/"}>
      <button className='p-2 text-lg mx-20 mb-4 bg-black/30 hover:bg-black transition-colors'>
        {location.pathname === '/' ? "Go To Example Shop":"Return Home"}
      </button>
      </Link> */}
      <Footer />
    </div>
  );
}

export default App;
