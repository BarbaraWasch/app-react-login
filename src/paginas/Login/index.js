import React, { Component } from 'react';
import { Link, Navigate } from "react-router-dom";
import firebase from '../../firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      redirect: false
    };
    this.acessar = this.acessar.bind(this);
  }

  acessar = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha);
      // Se o login for bem-sucedido, atualiza o state para redirecionar
      this.setState({ redirect: true });
    } catch (error) {
      alert("Erro ao fazer login: " + error.message);
    }
  }

  render() {
    // Se this.state.redirect for true, navega para a página principal
    if (this.state.redirect) {
      return <Navigate to="/principal" />;
    }

    return (
      <div className="container">
        <h1>Acesse sua Conta</h1>
        <input type="email" placeholder="E-mail" onChange={(e) => this.setState({ email: e.target.value })} /> <br />
        <input type="password" placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })} /> <br />

        <button onClick={this.acessar}>Acessar</button>
        <Link to="/cadastro"><button>Criar uma conta</button></Link>
      </div>
    );
  }
}

export default Login;