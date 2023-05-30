import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';

import Home from './pages/home';
import Cadastrarinformacoes from './pages/curriculo/Cadastrarinformacoes/Cadastrarinformacoes';
import Cadastrarexperincia from './pages/curriculo/Cadastrarexperiencia/Cadastrarexperiencia';
import Listaportfolio from './pages/portfolio/Listaportfolio/Listaportfolio';
import Listaexperiencia from './pages/curriculo/Listaexperiencia/Listaexperiencia';
import Cadastrarportfolio from './pages/portfolio/Cadastrarportfolio';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculo/informacoes/cadastro" element={<Cadastrarinformacoes />} />
          <Route path="/curriculo/experiencia/cadastro" element={<Cadastrarexperincia />} />
          <Route path="/portfolio/lista" element={<Listaportfolio />} />
          <Route path="/curriculo/experiencia/lista" element={<Listaexperiencia />} />
          <Route path='/portfolio/cadastro' element={<Cadastrarportfolio /> } /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
