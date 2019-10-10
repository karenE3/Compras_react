import React from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Home from './Componentes/Home';
import Cadastro from './Componentes/Cadastro/Cadastro';

const App = () => {
  return (

    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/cadastro" component={Cadastro} />
    </Router>
  )
}
export default App;