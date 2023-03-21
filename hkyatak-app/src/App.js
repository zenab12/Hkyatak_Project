import './App.css'
import SignUp from './components/auth/sign_up.js';
function App() {
  return (
  
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SignUp/>
    </div>
  );
}

export default App;
