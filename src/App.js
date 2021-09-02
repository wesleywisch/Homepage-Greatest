import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Hero } from './components/Hero';
import { Products } from './components/Products';

import GlobalStyle from './styles/global';

import { productData } from './Data/productData';

function App() {
  return (
    <Router>
      <Hero />
      <Products heading='Choose Your favorite' data={productData} />
      <GlobalStyle />
    </Router>
  );
}

export default App;
