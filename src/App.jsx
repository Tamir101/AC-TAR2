import { useState } from 'react'
import './App.css'
import CCQ1 from './ClassComps/CCQ1'
import CCQ2 from './ClassComps/CCQ2'
import CCQ3 from './ClassComps/CCQ3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HOME WORK 2</h1>
        <h2>q1:</h2>
       <CCQ1/>
       <h2>q2:</h2>
       <CCQ2/>
       <h2>q3:</h2>
       <CCQ3/> 
    </>
  )
}

export default App
