import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div>

      <Navbar/>
      {/* <HalftoneEffect /> */}
      {/* <DevWarning /> */}
      <Routes>
        <Route path='/' element={<Main />} /> 
        <Route path='/portfolio-project' element={<Main />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
