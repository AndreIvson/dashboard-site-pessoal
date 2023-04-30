import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';

import Home from './pages/home';
import Cadastrarinformacoes from './pages/curriculo/Cadastrarinformacoes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculo/informacoes/cadastro" element={<Cadastrarinformacoes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
};

export default App;
