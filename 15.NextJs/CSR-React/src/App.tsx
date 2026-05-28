import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
       <button onClick={() => {
        setCount(c => c+1)
       }}>Count {count}</button>
    </>
  )
}

export default App
