import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

// Cache de Dados
// Carregue dados da API quando montar
// Salve em localStorage(vou fazer slides ensinando)
// Limpe quando desmontar
// Objetivo: Gerenciamento de ciclo de vida prático


function App() {

  const url = "https://viacep.com.br/ws/01001000/json/";

  interface ApiResponse {
    cep: string;
    bairro: string;
    localidade: string;
    uf: string;
  }

  useEffect(() => {
    localStorage.clear();

    const getData = async () => {
      const response = await axios.get(url);
      const formattedData: ApiResponse = {
        cep: response.data.cep,
        bairro: response.data.bairro,
        localidade: response.data.localidade,
        uf: response.data.uf,
      };
      window.localStorage.setItem('Endereço', JSON.stringify(formattedData));
    };
    getData();
  }, []);

  return (
    <div>
      <p>
        {localStorage.getItem('Endereço')
          ? Object.entries(JSON.parse(localStorage.getItem('Endereço') || '{}')).map(([key, value]) => (
              <span key={key}>
                {key}: {String(value)}
                <br />
              </span>
            ))
          : "Loading..."}
      </p>
      <button
        onClick={() => {
          localStorage.clear()
        }}
      >
        Limpar LocalStorage
      </button>
    </div>
  )
}

export default App
