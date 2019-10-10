import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./NavBar.scss"

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  }

  return(
    <div className="Navbar">
      <nav>
        <div className="ancora">
          <Link onClick={FecharMenu} to="/">home</Link>
          <Link onClick={FecharMenu} to="/pagamento">pagamento</Link>
          <Link onClick={FecharMenu} to="/produtos">produtos</Link>
          <Link onClick={FecharMenu} to="/carros">carros</Link>
        </div>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span className={`${menuAtivo ? "virarX1": ""}`}></span>
          <span className={`${menuAtivo ? "sumirIgualTiro": ""}`}></span>
          <span className={`${menuAtivo ? "virarX2": ""}`}></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/">Pagamentos</Link>
            <Link to="/">Produtos</Link>
            <Link to="/">Carros/</Link>
      </section>
    </div>
  );
}

export default Navbar;
