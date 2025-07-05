import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 5;

  let [counter, setCounter] = useState(5);

  const addvalue  = () => {
    console.log("add value" ,Math.random());
    // counter = counter + 1;
    setCounter(counter+1);
  }

  const removevalue = () => {
    setCounter(counter-1);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter: {counter} </h2>

      <button
      onClick={addvalue}>Add value {counter}</button>
      <br />
      <button onClick={removevalue}>Remove value {counter}</button>
      
    </>
  )
}

export default App
