import Card from 'react-bootstrap/Card';
import {useParams , useNavigate, useOutletContext} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';


const CharacterDetailsPage = () => {
    const [characterInfo, setCharacterInfo] = useState({})
    const [errorMessage, setErrorMessage] = useState("")
    const {characterNumber} = useOutletContext();
    //console.log(characterNumber)

    const {id} = useParams()
    const navigate = useNavigate()
    //console.log(id)

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

    const incrementId = () => {
        let new_id = parseInt(id) + 1
        //console.log("new", new_id)
        if (new_id > characterNumber){
            console.log("error")
            setErrorMessage ("This is the last character. There are no more next characters!")
        }else{
            navigate(`/characters/${new_id}`)
            setErrorMessage ("")
        }
    }

    const decrementId = () => {
        
        let new_id = parseInt(id) - 1
        //console.log("new", new_id)
        if (new_id < 1){
            setErrorMessage("This is the first character. There are no more previous characters!")
        }else{
            navigate(`/characters/${new_id}`)
            setErrorMessage ("")
        }
    }


    return(
        <>
            {characterInfo.gender ? (
                <> 
                    <div>{errorMessage} </div>
                    <p>{characterInfo.name}</p>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={characterInfo.image} />
                        <Card.Body>
                        <Card.Text>
                        {characterInfo.name} is a {characterInfo.gender} {characterInfo.species} and is currently {characterInfo.status}. 
                            At the moment, {characterInfo.name} was last seen in {characterInfo.location.name} and is originally from {characterInfo.origin.name}. The first appearance of {characterInfo.name} in the show is in episode {parseInt(characterInfo.episode[0].split('/').pop(), 10)} 
                            . Their most recent appearance is in episode {parseInt(characterInfo.episode[characterInfo.episode.length - 1].split('/').pop(), 10)}.
                        </Card.Text>
                        </Card.Body>
                        <br/>
                        <Button onClick = {() => incrementId()}>Next </Button>
                        <br/>
                        <Button onClick = {() => decrementId()}> Previous </Button>
                    </Card>
                </>
            ) : (
                <p>Loading character information...</p>
            )}
        </>
    );
    
}

export default CharacterDetailsPage