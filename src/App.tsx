import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';


function App() {
  return (
    <div>
      <Navbar path="/"/>
      <Routes>
        <Route path='/' element={<Main />} /> 
        <Route path='/portfolio-project' element={<Main />} /> 
      </Routes>
    </div>
  );
}

export default App;
