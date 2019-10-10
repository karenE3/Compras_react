import React, { useState, useEffect } from "react";
import Input from "../Input";
import "./Cadastro.scss";
import Botao from "../Botao/Botao";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState(""); 
  const [id, setId] = useState(1);
  const [count, setCount] = useState(1);

  const gerarPersonagem = () => {
    if(id === 494){
      setId(1);
    }else{
      setId(id + 1)
    }
    setId(id + 1)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      name: nome,
      email: email,
      confir_email: email,
      password: senha

    }
    window.localStorage.setItem(`Dados${count}`, JSON.stringify(payload));
    setCount(count + 1);
    
    console.log(payload)
    setNome("");
    setEmail("");
    setConfirmEmail("");
    setSenha("");
  };



  useEffect(() =>(
      fetch( `https://rickandmortyapi.com/api/character${id}`, {
        method: "GET"
      }).then((result) =>{
        return result.json();
      }).then((data) => {
        console.log(data)
      }).catch(() => {
        console.log("o ANTA, deu ruim")
      })
    ))
    

  return (
    <div className="Cadastro">
      <h1>Faça seu cadastro</h1>
      <button onClick= {gerarPersonagem}></button>
      <form onSubmit={handleSubmit}>
        <Input
          value={nome}
          type="text"
          label="Nome"
          placeholder="Nome completo"
          atualizarState={setNome}
          obrigatorio
        />
        <Input
          value={email}
          type="email"
          label="Email"
          placeholder="Digite seu email"
          atualizarState={setEmail}
        />
        <Input
          value={confirmEmail}
          type="email"
          label="Confirmar Email"
          placeholder="Confirme seu email"
          atualizarState={setConfirmEmail}
          obrigatorio
        />
        <Input
          value={senha}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          atualizarState={setSenha}
          obrigatorio
        />
        <Botao>Cadastrar</Botao>
      </form>
    </div>
  );
};

export default Cadastro;