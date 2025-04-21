import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {

  const [cep, setCep] = useState<any>(null);

  async function fetchCepData(cepIn: string) {
    await axios.get(`https://viacep.com.br/ws/${cepIn}/json/`).then((response) => {
      setCep(response.data);
    });
  };

  useEffect(() => {
    fetchCepData('01001000');
  },);

  return (
    <div>
      {cep ? (
        <ul>
          {Object.entries(cep).map(([key, value]) => (
              <li
                key={key}
              >
                <strong>{key}: </strong> {String(value)}
              </li>
            ))}
        </ul>
        ) : (
          <p>
            Carregando...
          </p>  
        )}
    </div>
  )
}

export default App