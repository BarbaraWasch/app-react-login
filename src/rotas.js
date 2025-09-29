import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Principal from './paginas/Principal';

const Rotas = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/principal" element={<Principal />} />
      </Routes>
    </HashRouter>
  );
}

export default Rotas;