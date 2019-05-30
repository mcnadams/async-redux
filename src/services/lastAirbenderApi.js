const defaultImage = 'https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg';

export default function getCharacters() {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(characters => characters.map(character => ({
      _id: character._id,
      name: character.name,
      photoUrl: character.photoUrl || defaultImage
    })));
}

export function getCharacter(id) {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(res => res.json())
    .then(character => ({
      _id: character._id,
      name: character.name,
      photoUrl: character.photoUrl || defaultImage
    }));
}
