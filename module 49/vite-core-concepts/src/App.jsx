import { useState } from 'react';
import './App.css';
import Device from './component/Device/Device';
import Watch from './component/Watch/Watch';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Device brand="iphone" price="99999"></Device>
      <Device brand="samsung" price="89999"></Device>
      <Device brand="Xioami" price="79999"></Device>
      <Watch></Watch>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
