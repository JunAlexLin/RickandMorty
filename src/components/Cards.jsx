import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Cards({id,name,gender,species,image,status,favoriteCharacters,setFavoriteCharacters}) {
  const navigate = useNavigate();

  const toggleFavorite = (id) => {
    if (favoriteCharacters.includes(id)) {
      // If id is already in favorites, remove it
      setFavoriteCharacters(favoriteCharacters.filter((favId) => favId !== id));
    } else {
      // If id is not in favorites, add it
      setFavoriteCharacters([...favoriteCharacters, id]);
    }
  };

  const getArticle = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Check if the first letter of the word is a vowel
    return vowels.includes(word[0].toLowerCase()) ? 'an' : 'a';
  };


  // Check if id is already in favorites
  const isFavorite = favoriteCharacters.includes(id);

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {name} is {getArticle(gender)} {gender} {species}.
          </Card.Text>
          <Button onClick={() => navigate(`/characters/${id}`)}>More Info</Button> <br/>
          <br/>
          <Button onClick={() => toggleFavorite(id)}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
