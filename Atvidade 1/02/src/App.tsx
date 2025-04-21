import { useState } from 'react'
import './App.css'

function App() {
  const [array, setArray] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  function addArray(value: string) {
    let newArray = [...array];
    newArray.push(value);
    setArray(newArray);
  }

  return (
    <div>
      
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          />
          <button
            onClick={() => {
              addArray(inputValue);
              setInputValue('');
            }}
          >
            Adicionar Palavra
          </button>
        </div>

      <p>
        {`${array}`}
      </p>
    </div>
  )
}

export default App