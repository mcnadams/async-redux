import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <div>
      <img src={character.photoUrl} />
      <p>{character.name}</p>
    </div>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
  })
};

export default Character;
