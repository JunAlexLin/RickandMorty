import Card from 'react-bootstrap/Card';
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'

const CharacterDetailsPage = () => {
    const [characterInfo, setCharacterInfo] = useState({})

    const {id} = useParams()
    console.log(id)

    useEffect(() => {
        const getCharacterInfo = async () => {
            try{
                let response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                setCharacterInfo(response.data)
            }catch(error){
                console.log(error)
            }
        }
        getCharacterInfo();
    },[id])

    console.log(characterInfo)


    return(
        <>
            {characterInfo.gender ? (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={characterInfo.image} />
                    <Card.Body>
                    <Card.Title>{characterInfo.name}</Card.Title>
                    <Card.Text>
                        is a {characterInfo.gender} {characterInfo.species} and is currently {characterInfo.status}. 
                        At the moment, {characterInfo.name} was last seen in {characterInfo.location.name} and is originally from {characterInfo.origin.name}. The first appearance of {characterInfo.name} in the show is in episode {parseInt(characterInfo.episode[0].split('/').pop(), 10)} 
                        . Their most recent appearance is in episode {parseInt(characterInfo.episode[characterInfo.episode.length - 1].split('/').pop(), 10)}.
                    </Card.Text>
                    </Card.Body>
                </Card>
            ) : (
                <p>Loading character information...</p>
            )}
        </>
    );
    
}

export default CharacterDetailsPage