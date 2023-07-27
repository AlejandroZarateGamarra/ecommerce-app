import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/category/:id" component={ItemListContainer} />
        <Route path="/item/:id" component={ItemDetailContainer} />
      </div>
    </BrowserRouter>
  );
};

export default App;
