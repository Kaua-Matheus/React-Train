import { useState } from 'react'
import './App.css'

import Button from './components/Button';
import Informations from './components/Infomations';

function App() {

  const [btnvalue, setBtnvalue] = useState('Verde')
  const [value, setvalue] = useState(false)

  return (
  <div>

    <div>
      {value ? <Informations /> : ""}
    </div>

    <br />

    <Button

      onClick={
        () => {if (btnvalue == "Verde") {
          setBtnvalue("Vermelho");
          setvalue(true);
        } else {
          setBtnvalue("Verde");
          setvalue(false);
        }
      }
      }

      // @ts-ignore
      type={btnvalue}

    >
      {`${value ? 'Esconder Frase' : 'Ver Frase'}`}
    </Button>
  </div>
  )
}

export default App
