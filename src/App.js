import './App.css';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import { Web3Provider } from './Web3Context';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Web3Provider> 
            <ComponentOne />
            <ComponentTwo />
        </Web3Provider>
      </header>
    </div>
  );
}

export default App;
