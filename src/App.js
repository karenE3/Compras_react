import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import Produtos from './Componentes/Produtos';
import Pagamentos from './Componentes/Pagamentos';
import Carros from './Componentes/Carros';
import Home from './Componentes/Home';

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Botao>
        <Route exact path="/" componet={Home} />
        <Route path="/pagamento" componet={Pagamentos} />
        <Route path="/produtos" componet={Produtos} />
        <Route path="/carros" componet={Carros} />
      </Router>
      
    </div>
  )
}
export default App;