import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent.jsx';
import Button from './Button.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <MyComponent></MyComponent>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React NOW
        </a>

        <Button ></Button>
      </header>

    </div>
  );
}

export default App;
