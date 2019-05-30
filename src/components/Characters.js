import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const characterList = characters.map(character => {
    return (
      <li key={character.id} style={{ 
        'list-style-type': 'none',
        'width': '25vw',
        'margin': '5px'
      }}>
        <Character character={character} />
      </li>
    );
  });

  return (
    <ul style={{ 
      'display': 'flex',
      'flex-wrap' : 'wrap'
    }}>
      {characterList}
    </ul>
  );

}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
};

export default Characters; 
