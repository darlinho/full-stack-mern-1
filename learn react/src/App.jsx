import { useState } from 'react'
import './App.css'

function App() {

  const [bgBlack, setbgBlack] = useState(true)
  const [color, setColor] = useState({ color: "white" })
  const [search, setSearch] = useState("")


  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")




  const showList = true
  const hello = "Hello World !"
  const fruits = [
    { id: 1, name: "Bannane" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Citron" },
    { id: 4, name: "Mangue" }
  ]

  const toggleBackground = () => {
    setbgBlack(!bgBlack)
    if (color.color == "white") {
      setColor({ color: "black" })
    } else {
      setColor({ color: "white" })
    }
  }
  const addToList = () => {

  }

  const passwordValidation = (value) => {

    setPassword(value)

    if (value.length < 8) {
      setPasswordError('Le mot de passe doit etre supérrieur à 6 caractères !')
    } else {
      setPasswordError("")
    }
  }

  const confirmationPasswordValidation = (value) => {

    setConfirmPassword(value)

    if (value !== password) {
      setConfirmPasswordError('Les mots de passe sont différents !')
    } else {
      setConfirmPasswordError('')

    }
  }

  return (
    <div className={`${bgBlack ? 'bg-black' : ''}`} style={color}>
      <p> {search} </p>
      {showList &&
        <ul>
          {fruits.map((fruit) => {
            return (
              <li key={fruit.id}>{fruit.name}</li>
            )
          })}
        </ul>
      }
      <div className='flex'>
        <p>
          <input
            type="password"
            value={password}
            placeholder='Veuillez entrer un mot de passe'
            onChange={(e) => passwordValidation(e.target.value)}
          />
          <span className='red'>{passwordError}</span>
        </p>
        {password}

        <p>

          <input
            type="password"
            value={confirmPassword}
            placeholder='Confirmer votre mot de passe !'
            onChange={(e) => confirmationPasswordValidation(e.target.value)}
          />
          <span className='red'>{confirmPasswordError}</span>
        </p>
        {confirmPassword}
      </div>



      <button onClick={() => toggleBackground()}>test</button>
      <button onClick={addToList}>ajouter</button>
    </div>
  )
}

export default App
