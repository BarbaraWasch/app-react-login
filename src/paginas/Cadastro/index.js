import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from '../../firebase';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      email: "",
      senha: ""
    };

    this.cadastrar = this.cadastrar.bind(this);
  }

  // Função assíncrona para registrar um novo usuário
  cadastrar = async () => {
    try {
      // Cria o usuário no serviço de Autenticação do Firebase com e-mail e senha.
      const retorno = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha);

      // Após a criação do usuário, grava os dados adicionais no Firestore.
      // O documento no Firestore é identificado pelo UID do usuário da Autenticação,
      // garantindo a ligação entre os dois serviços.
      await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        dataNascimento: this.state.dataNascimento
      });

      alert("Usuário cadastrado com sucesso!");
      
    } catch (error) {
      // Captura e exibe erros do Firebase (ex: e-mail já em uso, senha fraca).
      alert(error.message);
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Crie sua Conta</h1>
        <input type="text" placeholder="Nome" onChange={(e) => this.setState({ nome: e.target.value })} /> <br />
        <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({ sobrenome: e.target.value })} /> <br />
        <input type="date" onChange={(e) => this.setState({ dataNascimento: e.target.value })} /> <br />
        <input type="email" placeholder="E-mail" onChange={(e) => this.setState({ email: e.target.value })} /> <br />
        <input type="password" placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })} /> <br />
        
        <button onClick={this.cadastrar}>Cadastrar</button>
        <Link to="/"><button>Já tenho conta</button></Link>
      </div>
    );
  }
}

export default Cadastro;