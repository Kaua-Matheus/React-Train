import { useState, useMemo } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('Todos')

  const valoresAtt = useMemo(() => {
    switch (input) {
      case 'Todos':
        return [
          'maça', 'laranja', 'pêra', 'uva', 
          'carro', 'trem', 'bicicleta', 'patinete', 
          'meia', 'calça', 'luva',
          'preto', 'azul', 'amarelo',
        ];

      case 'Roupas': 
        return ['meia', 'calça', 'luva'];

      case 'Transportes': 
        return ['carro', 'trem', 'bicicleta', 'patinete'];

      case 'Cores': 
        return ['preto', 'azul', 'amarelo'];

      case 'Comidas': 
        return ['maça', 'laranja', 'pêra', 'uva'];

      default:
        return [
          'maça', 'laranja', 'pêra', 'uva', 
          'carro', 'trem', 'bicicleta', 'patinete', 
          'meia', 'calça', 'luva',
          'preto', 'azul', 'amarelo',
        ];
    }
  }, [input]);

  return (
    <div>
      
        <div
          style={
            {
              backgroundColor: 'gray',
              color: 'white',
              padding: '10px',
              borderRadius: '10px'
            }
          }
        >
            <select name="viagem"
            style={{
              backgroundColor: 'darkgrey',
              color: 'white',
            }}
            onChange={(e) => {
              const value = e.target.value;
              setInput(value);
            }}
            >
            <option value="Todos">Todos</option>
            <option value="Roupas">Roupas</option>
            <option value="Transportes">Transportes</option>
            <option value="Cores">Cores</option>
            <option value="Comidas">Comidas</option>
            </select>

        </div>

        <br />

        <div
          style={
            {
              backgroundColor: 'gray',
              color: 'white',
              padding: '10px',
              borderRadius: '10px'
            }
          }
        >
          <p
            style={
              {
                fontWeight: 'bold'
              }
            }
          >{`${input}`}</p>  
          {valoresAtt.map((item, i) =>
            <div key={i}>
              {item}
            </div>
          )}
        </div>

    </div>
  )
}

export default App