import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  const [favoriteCharacters, setFavoriteCharacters] = useState([])

  return (
    <>
      <Navbar />
      <div id = "container">
      <h1 data-text="Your Glitch Text Here">Rick and Morty</h1>
        <Outlet context ={{favoriteCharacters, setFavoriteCharacters}}/>
      </div>
    </>
  )
}

export default App
