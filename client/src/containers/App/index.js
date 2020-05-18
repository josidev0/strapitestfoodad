/**
 *
 * App
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyles from '../../components/GlobalStyles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import About from '../About';
import Blog from '../Blog';
import RestaurantsPage from '../RestaurantsPage';
import RestaurantPage from '../RestaurantPage';
import NotFound from '../NotFound';

const headerUrls = [
  { name: 'Restaurantes', to: '/' },
  { name: 'Sobre nosotros', to: '/about' },
  // Uncomment when available
  // { name: 'Blog', to: '/blog' }
];
const footerUrls = [
  { name: 'Cuenta', to: '/' },
  { name: 'Favoritos', to: '/' },
  { name: 'Términos', to: '/' },
  { name: 'Restaurantes', to: '/' },
  { name: 'Privacidad', to: '/' },
  { name: 'Sobre Nosotros', to: '/about' },
  { name: 'Contacto', to: '/' },
  { name: 'Blog', to: '/' },
];

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header links={headerUrls} />
      <Switch>
        <Route path="/" component={RestaurantsPage} exact />
        <Route path="/about" component={About} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/:id/:content" component={RestaurantPage} exact />
        <Route component={NotFound} />
      </Switch>
      <Footer links={footerUrls} />
    </div>
  );
}

App.defaultProps = {};
App.propTypes = {};

export default App;
