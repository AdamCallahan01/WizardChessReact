import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Chess but Cool</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The future platform for Adam and Austin's CS378 program
        </p>
        <a
          className="App-link"
          href="www.whitworth.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whitworth University
        </a>
      </header>
    </div>
  );
}

export default App;
