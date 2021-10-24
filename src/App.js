import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Electron
        </p>
        <Link to="/about">About This Software</Link>
       
      </header>
    </div>
  );
}

export default App;
