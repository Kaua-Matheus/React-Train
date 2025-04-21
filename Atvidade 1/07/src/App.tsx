import {   useRef } from 'react'
import './App.css'

function App() {

  const labelRef = useRef<HTMLLabelElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  
  const enviarFormulario = (evento: any) => {
    evento.preventDefault();

    if (inputRef.current) inputRef.current.value = '';
    if (emailRef.current) emailRef.current.value = '';

    inputRef.current?.focus();
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={enviarFormulario}
      >
        <div>
          <label ref={labelRef}>Nome de Usuário</label>
          <input type="text" ref={inputRef}/>
        </div>

        <div>
          <label>Email do Usuário</label>
          <input type="email" ref={emailRef}/>
        </div>

        <button>
          Salvar
        </button>

      </form>
    </div>
  )
}

export default App