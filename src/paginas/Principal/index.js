import React, { Component } from 'react';
import firebase from '../../firebase';

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      dataNascimento: ""
    };
  }

  // Este método é executado automaticamente quando o componente é montado na tela
  async componentDidMount() {
    // Verifica se há um usuário logado
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // Se houver um usuário logado, busca seus dados no Firestore
        const doc = await firebase.firestore().collection("usuario").doc(user.uid).get();
        if (doc.exists) {
          this.setState({
            nome: doc.data().nome,
            sobrenome: doc.data().sobrenome,
            dataNascimento: doc.data().dataNascimento
          });
        }
      }
    });
  }

  render() {
    return (
      <div className="container">
        <h2>Bem-vindo(a), {this.state.nome} {this.state.sobrenome}!</h2>
        <p>Data de Nascimento: {this.state.dataNascimento}</p>
      </div>
    );
  }
}

export default Principal;