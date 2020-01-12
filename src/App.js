import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import './index.scss';
import './font-awesome-library';
import Navigation from './Navigation';
import Footer from './Footer';
import {AboutUs, Contact, Foods, GiftBaskets, Home, Menu, NotFound, Pictures, Soaps} from './pages';

function App() {
  const pathname = useLocation().pathname;

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
          <Route exact path="/foods" component={Foods}/>
          <Route exact path="/soaps" component={Soaps}/>
          <Route exact path="/gift-baskets" component={GiftBaskets}/>
          <Route exact path="/pictures" component={Pictures}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact component={NotFound}/>
        </Switch>
      </main>
      {pathname !== '/contact' &&
      <Footer/>
      }
    </React.Fragment>

  );
}

export default App;
