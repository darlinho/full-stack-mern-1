import { useState } from 'react'
import './App.css'

function App() {

  const [bgBlack, setbgBlack] = useState(true)
  const [color, setColor] = useState({ color: "white" })


  const showList = true
  const hello = "Hello World !"
  const fruits = [
    { id: 1, name: "Bannane" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Citron" },
    { id: 4, name: "Mangue" }
  ]

  const showDialog = () => {
    setbgBlack(!bgBlack)
    if (color.color == "white") {
      setColor({ color: "black" })
    } else {
      setColor({ color: "white" })
    }
  }


  return (
    <div className={`${bgBlack ? 'bg-black' : ''}`} style={color}>
      <p> {hello} </p>
      {showList &&
        <ul>
          {fruits.map((fruit, index) => {
            return (
              <li key={index}>{fruit.name}</li>
            )
          })}
        </ul>
      }

      <button onClick={() => showDialog()}>test</button>
    </div>
  )
}

export default App
