import { useState, useMemo } from 'react';

import './App.css'

function App() {


  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operacao, setOperacao] = useState('+')

  let value = useMemo(() => {

    const future = Date.now() + 100;
    while (Date.now() < future) {}

    switch(operacao) {
      case '+':
        return Number.parseFloat(input1) + Number.parseFloat(input2);

      case '-':
        return Number.parseFloat(input1) - Number.parseFloat(input2);

      case '*':
        return Number.parseFloat(input1) * Number.parseFloat(input2);

      case '/':
        if (Number.parseFloat(input2) == 0) {
          return Infinity;
        }
        return Number.parseFloat(input1) / Number.parseFloat(input2);

      default:

        break;

    }


  }, [input1, input2, operacao])
  

  return (
    <div>

      <div
        style={{
          width: '50vw',
          padding: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <p>Valor 1</p>
          <input type="text"
            onChange={(e) => {setInput1(e.target.value)}}
          />
        </div>

        <p>{`${operacao}`}</p>

        <div>
          <p>Valor 2</p>
          <input type="text"
            onChange={(e) => {setInput2(e.target.value)}}
          />
        </div>
      </div>

      <div
        style={{
          width: '50vw',
          padding: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={() => setOperacao("+")}
        >
          Soma
        </button>

        <button
          onClick={() => setOperacao("-")}
        >
          Subtração
        </button>

        <button
          onClick={() => setOperacao("*")}
        >
          Multiplicação
        </button>

        <button
          onClick={() => setOperacao("/")}
        >
          Divisão
        </button>
      </div>

      <p>
        {`${value}`}
      </p>
    </div>
  )
}

export default App