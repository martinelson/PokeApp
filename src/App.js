import React from 'react';
import Header from './Header';
import Grass from './Grass';
import Favorite from './Favorite';
import Footer from './Footer';
import ErrorText from './ErrorText';
import ErrorBoundary from './ErrorBoundary';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Header/>
      <Switch>
        <Route exact path="/" component={Grass} />
        <Route exact path="/fav" component={Favorite} />
        <Route component={ErrorText} />
      </Switch>
      <Footer/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
