import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destino from './pages/Destino';
import Promocao from './pages/Promocao';
import Contato from './pages/Contato';
import Cadastro from './pages/Login';
import Footer from './components/Footer';
import Edit from './pages/Login/edit';
import Tabela from './pages/Login/tabela';
import View from './pages/Login/view';
import Login from './pages/Login/login';

export default function Rotas() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/destino' element={<Destino/>}/>
            <Route path='/promocao' element={<Promocao/>}/>
            <Route path='/contato' element={<Contato/>}/>
            <Route path='/signup' element={<Cadastro/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/tabela' element={<Tabela/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/view/:id' element={<View/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}