import { useState, useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import axios from 'axios'


function App() {
  const [favoriteCharacters, setFavoriteCharacters] = useState([])
  const [characterNumber, setCharacterNumber] = useState(0)

  useEffect(() => {
    const grabLength = async() =>{
      try{
        let response = await axios.get("https://rickandmortyapi.com/api/character")
        setCharacterNumber(response.data.info.count)
        //console.log("RESPONSE", response.data.info.count)
      }catch(error){
        console.log(error)
      }
    };
    grabLength(); 
  } ,[])



  return (
    <>
      <Navbar />
      <div id = "container">
      <h1 data-text="Your Glitch Text Here">Rick and Morty</h1>
        <Outlet context ={{favoriteCharacters, setFavoriteCharacters, characterNumber}}/>
      </div>
    </>
  )
}

export default App
