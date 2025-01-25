import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        This is APP component
        <Rating></Rating>
        <Accordion></Accordion>
        <Rating></Rating>
      </div>
    </>
  )
}

function Rating () {
  return (
    <div>
      <Star></Star>
      <Star></Star>
      <Star></Star>
      <Star></Star>
      <Star></Star>
    </div>
  )
}

function Star () {
  console.log('Star rendered');
  
  return (
    <div>
      <div>star</div>
    </div>
  )
}

function Accordion() {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default App
