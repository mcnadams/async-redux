import React from 'react';
import PropTypes from 'prop-types';

function CharacterInfo({ character }) {
  const allies = character.allies.map((ally, i) => <p key={i}>{ally}</p>);
  const enemies = character.enemies.map((enemy, i) => <p key={i}>{enemy}</p>);
  return (
    <section>
      <img src={character.photoUrl} />
      <h1>{character.name}</h1>
      <h2>Allies:</h2>
      <div>{allies}</div>
      <h2>Enemies:</h2>
      <div>{enemies}</div>
      <h2>Gender:</h2>
      <div>{character.gender}</div>
      <h2>Hair:</h2>
      <div>{character.hair}</div>
      <h2>Position:</h2>
      <div>{character.position}</div>
      <h2>Affiliation:</h2>
      <div>{character.affiliation}</div>
      <h2>First:</h2>
      <div>{character.first}</div>
    </section>
  );
}

CharacterInfo.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired,
    allies: PropTypes.array.isRequired,
    enemies: PropTypes.array.isRequired,
    gender: PropTypes.string.isRequired,
    hair: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    affiliation: PropTypes.string.isRequired,
    first: PropTypes.string.isRequired,
  })
};

export default CharacterInfo;
