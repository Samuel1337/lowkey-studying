import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  
  const [documentVisible, setDocumentVisible] = useState(document.visibilityState);
  
  useEffect(() => {
    const handleVisibilityChange = () =>
        setDocumentVisible(document.visibilityState);

    document.addEventListener(
        "visibilitychange",
        handleVisibilityChange,
    );

    return () =>
        document.removeEventListener(
            "visibilitychange",
            handleVisibilityChange,
        );
}, [document]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          document.visibilityState =<code>{document.visibilityState}</code>
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
    </div>
  );
}

export default App;
