import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Hero } from './components/Hero';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <Hero />
      <GlobalStyle />
    </Router>
  );
}

export default App;
