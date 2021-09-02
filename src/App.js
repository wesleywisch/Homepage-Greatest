import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Feature } from './components/Feature';

import GlobalStyle from './styles/global';

import { productData, productDataTwo } from './Data/productData';

function App() {
  return (
    <Router>
      <Hero />
      <Products heading='Escolha o seu favorito' data={productData} />
      <Feature />
      <Products heading='Doces para você' data={productDataTwo} />
      <GlobalStyle />
    </Router>
  );
}

export default App;
