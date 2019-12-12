import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './index.scss';
import './font-awesome-library';
import Navigation from './Navigation';
import {AboutUs, Contact, Home, Menu, NotFound, Pictures, Products} from './pages';

function App() {
  return (
    <React.Fragment>
      <header>
        <Navigation withImage={true}/>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about-us" component={AboutUs}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/products" component={Products}/>
          <Route exact path="/pictures" component={Pictures}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact component={NotFound}/>
        </Switch>
      </main>
    </React.Fragment>

  );
}

export default App;
