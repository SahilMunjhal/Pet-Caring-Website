import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import {Router} from './components/Routers';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Router/>
    </div>
  );
}

export default App;
