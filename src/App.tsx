import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Navbar path="/"/>
      <Main />
    </div>
  );
}

export default App;
