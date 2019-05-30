import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCharacter, getCharacterLoading, getCharacterError } from '../selectors/characterSelectors';
import CharacterInfo from '../components/CharacterInfo';
import { fetchCharacter } from '../actions/characterActions';

class CharacterDetail extends PureComponent {

  static propTypes = {
    character: PropTypes.shape({
      name: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      allies: PropTypes.array.isRequired,
      enemies: PropTypes.array.isRequired,
      gender: PropTypes.string.isRequired,
      hair: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      affiliation: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
    }),
    loading: PropTypes.bool.isRequired,
    fetchCharacter: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchCharacter();
  }

  render() {
    if(this.props.loading) return <h1>Loading!</h1>;
    return <CharacterInfo character={this.props.character} />;
  }
}

const mapStateToProps = state => ({
  character: getCharacter(state),
  loading: getCharacterLoading(state),
  error: getCharacterError(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchCharacter() {
    dispatch(fetchCharacter(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterDetail);
