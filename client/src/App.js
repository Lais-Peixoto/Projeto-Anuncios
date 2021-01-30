import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Template from './components/MainComponents';
import Header from './components/partials/Header';
import Routes from './Routes';
// import Footer from './components/partials/Footer';

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        {/* <Footer /> */}
      </Template>
    </BrowserRouter>
  );
}

export default App;
