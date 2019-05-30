import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ character }) {
  return (
    <Link to={`/${character._id}`}>
      <img src={character.photoUrl} style={{ 'width': '100%' }}/>
      <p>{character.name}</p>
    </Link >
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
  })
};

export default Character;
