import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';

import Home from './pages/home';
import Cadastrarinformacoes from './pages/curriculo/Cadastrarinformacoes/Cadastrarinformacoes';
import Cadastrarexperincia from './pages/curriculo/Cadastrarexperiencia/Cadastrarexperiencia';
import ListaPortifolio from './pages/portifolio/Listaportifolio/Listaportifolio';
import Listaexperiencia from './pages/curriculo/Listaexperiencia/Listaexperiencia';
import Cadastrarportifolio from './pages/portifolio/Cadastrarportifolio';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curriculo/informacoes/cadastro" element={<Cadastrarinformacoes />} />
          <Route path="/curriculo/experiencia/cadastro" element={<Cadastrarexperincia />} />
          <Route path="/portifolio/lista" element={<ListaPortifolio />} />
          <Route path="/curriculo/experiencia/lista" element={<Listaexperiencia />} />
          <Route path='/portifolio/cadastro' element={<Cadastrarportifolio /> } /> 
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
