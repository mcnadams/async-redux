import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';
import CharacterDetail from '../containers/CharacterDetail';

export default function App() {
  return (
    <Router>
      <Link to='/'>Home</Link>
      <Switch>
        <Route exact path='/' component={AllCharacters} />
        <Route path='/:id' component={CharacterDetail} />
      </Switch>
    </Router>
  );
}
