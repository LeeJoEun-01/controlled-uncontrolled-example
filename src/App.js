import logo from './logo.svg';
import './App.css';
import ControlledComponents from './components/ControlledComponent';
import UncontrolledComponents from './components/UncontrolledComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ControlledComponents />
        <UncontrolledComponents />
      </header>
    </div>
  );
}

export default App;
