import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import ShowSpell from './pages/ShowSpell';

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/spells/:id" component={ShowSpell} />
      <Route exact path="/favourites" component={Favourites} />
    </BrowserRouter>
  );
};

export default App;
