import axios from 'axios';
import { useState, useEffect } from 'react';
import Cards from '../components/Cards'
import { useOutletContext } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; // Make sure to import these


const CharactersPage = () => {
    const [characterList, setCharacterList] = useState([])
    const  {favoriteCharacters, setFavoriteCharacters} = useOutletContext()
    const {characterNumber} = useOutletContext();
    const [coordinates, setCoordinates] = useState('');
    const [loading, setLoading] = useState(true);

    

    let lst = []
    for (let i = 1; i <= characterNumber; i+=1){  //next iteration don't hard code this value 
        lst.push(i)
    }

    useEffect(() => {
        const grabCharacters = async () => {
            try {
                //console.log(`https://rickandmortyapi.com/api/character/${lst}`)
                let response = await axios.get(`https://rickandmortyapi.com/api/character/[${lst}]`);
                console.log("RESPONSE", response.data)
                setCharacterList(response.data)
            } catch (error) {
                console.log(error);
            }
        };

        grabCharacters();
    }, []); // Empty dependency array means this effect will only run once after the component mounts
    
    


    return (
        <>
            <h2> Meet the Characters!</h2>
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
    );
}

export default CharactersPage;
