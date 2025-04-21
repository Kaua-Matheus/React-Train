import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [iniciado, setIniciado] = useState(false);
  const [timerValue, setTimerValue] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const button1Ref = useRef<HTMLButtonElement | null>(null);

  const startTimer = () => {
    if (!iniciado) {
      setIniciado(true);
      intervalRef.current = setInterval(() => {
        setTimerValue((prev) => prev + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    setIniciado(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTimerValue(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <p>{timerValue}s</p>
      <button
        ref={button1Ref}
        onClick={() => {
          if(button1Ref.current) {
            if(button1Ref.current.innerHTML == "Iniciar") {
              button1Ref.current.innerHTML = "Parar"
              startTimer();
            } else {
              button1Ref.current.innerHTML = "Iniciar"
              pauseTimer();
            }
          }
        }
          }>
          Iniciar
        </button>
      <button onClick={resetTimer}>Resetar</button>
    </div>
  );
}

export default App;