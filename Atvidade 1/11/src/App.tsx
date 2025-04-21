import { useState, useEffect } from 'react';

// Components Imports
import FullscreenImage from './components/FullScreenImage';

// Images
import cachorro from './assets/cachorro.webp'
import gatinho from './assets/gatinho sus.avif'

function App() {

  const [iniciado, setIniciado] = useState(false);
  const [timerValue, setTimerValue] = useState(0);

  const startTimer = () => {
    if (!iniciado) {
      setIniciado(true);
      setTimerValue(
        setInterval(() => {
          setTimerValue((prev) => prev + 1);
        }, 1000));
    }
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerValue) {
        clearInterval(timerValue);
      }
    };
  }, []);


  return (
    <main
      style={{
        display: 'flex',
        width: '100vw',
        padding: '10px',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      Essa é a página Principal

      <p>Você passou {`${timerValue}`} segundos na aba principal.</p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Clique nos bixos!</h1>
        <div
          style={{ display:'flex', padding: '8px', flexDirection: 'row', justifyContent:'center', gap: '8px' }}>
          <div
            style={{ display: 'flex', height: '32rem', gap: '8px', justifyContent: 'center' }}>
            <FullscreenImage src={cachorro} alt="cachorro" />
          </div>
          <div
            style={{ display: 'flex', height: '32rem', gap: '8px', justifyContent: 'center' }}>
            <FullscreenImage src={gatinho} alt="gatinho" />
          </div>
        </div>
      </div>

    </main>
  )
}

export default App
