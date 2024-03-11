import { useOutletContext } from 'react-router-dom';
import Cards from '../components/Cards'
import { Container, Row, Col, Button } from 'react-bootstrap'; // Make sure to import these
import {useState, useEffect} from 'react';
import axios from 'axios';

const Favorites = () => {
    const  {favoriteCharacters, setFavoriteCharacters} = useOutletContext()
    const [characterList, setCharacterList] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const max_favorite_characters = 8
    
    useEffect(() => {
        const grabCharacters = async () => {
            console.log("Current favorites:", favoriteCharacters);
            
            if (favoriteCharacters.length > 0 && favoriteCharacters.length < 9) {
                try {
                    const url = `https://rickandmortyapi.com/api/character/${favoriteCharacters.join(',')}`;
                    const response = await axios.get(url);
                    setCharacterList(Array.isArray(response.data) ? response.data : [response.data]);
                } catch (error) {
                    console.error("Error fetching favorite characters:", error);
                    setCharacterList([]);
                    setErrorMessage("Error fetching favorite characters.");
                }
            } else if (favoriteCharacters.length >= (max_favorite_characters + 1)) {
                setErrorMessage(`You can't have more than 8 favorite characters and you currently have ${favoriteCharacters.length}! Go back to the characters list and get rid of one favorite character.`);
            } else {
                setCharacterList([]);
                setErrorMessage("You have no favorites.");
            }

            // Log the error message if it's set
            if (errorMessage) {
                console.log(errorMessage);
            }
        };
    
        grabCharacters();
    }, [favoriteCharacters]);

    
    console.log(characterList)

    return(
        <>
            <h2>Here are your Favorites</h2>
            <div>
                {errorMessage}
            </div>
            <Container>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {characterList.map((character, i) => {
                        return <><Col key = {i}>
                        <Cards lg = {3}
                        id = {character.id}
                        name = {character.name}
                        gender = {character.gender}
                        species = {character.species}
                        status = {character.status}
                        image = {character.image}
                        favoriteCharacters = {favoriteCharacters}
                        setFavoriteCharacters = {setFavoriteCharacters}
                        />
                    </Col> 
                    </>
                    })}
                </Row>
            </Container>
            
        </>
    )
}

export default Favorites