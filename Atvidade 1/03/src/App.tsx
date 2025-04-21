import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])


  return (
    <div>
      <p>
        {`${seconds}s se passaram`}
      </p>
    </div>
  )
}

export default App