import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCharacters, getCharactersLoading, getCharactersError} from '../selectors/characterSelectors';
import Characters from '../components/Characters';
import { fetchCharacters } from '../actions/characterActions';

class AllCharacters extends PureComponent {

  static propTypes = {
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchCharacters: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    if(this.props.loading) return <h1>Loading!</h1>;

    return <Characters characters={this.props.characters} />;
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state),
  error: getCharactersError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);

