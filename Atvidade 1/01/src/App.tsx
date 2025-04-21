import { useState } from 'react';

import './App.css';


export default function App(){

  const [value, setValue] = useState(0);

  return (
    <div>
      <p>
        {`${value}`}
      </p>
      <div>
        <button onClick={() => setValue(value + 1)}>
          Incrementar
        </button>
        <button onClick={() => setValue(value - 1)}>
          Decrementar
        </button>
      </div>
    </div>
  )
}