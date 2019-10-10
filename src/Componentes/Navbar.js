import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const fecharMenu = () => {
    setMenuAtivo(false)
  }

  return (
    <div className="Navbar">
      <nav>
        <div className="ancora">
          <Link to="/">Home></Link>
          <Link to="/pagamento">Pagamento></Link>
          <Link to="/produtos">Produtos></Link>
          
        </div>

        <div onClick={abrirMenu} id="menu-hamburguer">
          <span className={`${menuAtivo ? "variarX1" : ""}`} ></span>
          <span className={`${menuAtivo ? "sumirIgualTiro" : ""}`}></span>
          <span className={`${menuAtivo ? "variarX2" : ""}`}></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">Home</Link>
        <Link onClick={fecharMenu} to="/pagamento">Pagamento</Link>
        <Link onClick={fecharMenu} to="/produtos">Produtos</Link>
      </section>
    </div>
  );
};
export default Navbar;
