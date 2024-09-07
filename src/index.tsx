import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import './input.css';
import StudentsListing from './pages/listing/StudentsListing';
import ParentListing from './pages/listing/ParentListing';
import DisciplinesListing from './pages/listing/DisciplinesListing';
import TeachersListing from './pages/listing/TeachersListing';
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';
import SideBar from './components/SideBar';
import ParentCreate from './pages/register/ParentCreate';
import StudentsCreate from './pages/register/StudentsCreate';
import TeachersCreate from './pages/register/TeachersCreate';
import DisciplineCreate from './pages/register/DisciplineCreate';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <div className='flex'>
          {window.location.pathname !== '/login' && window.location.pathname !== '/' && <SideBar />}
        <div className='flex flex-col w-full'>
          {window.location.pathname !== '/login' && window.location.pathname !== '/' && <Header />}
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/alunos" element={<StudentsListing />} />
            <Route path="/disciplinas" element={<DisciplinesListing />} />
            <Route path="/pais-responsaveis" element={<ParentListing />} />
            <Route path="/professores" element={<TeachersListing />} />
            <Route path="/cadastrar-aluno" element={<StudentsCreate />} />
            <Route path="/cadastrar-pais-responsaveis" element={<ParentCreate />} />
            <Route path="/cadastrar-professor" element={<TeachersCreate />} />
            <Route path="/listar-professores" element={<TeachersListing />} />
            <Route path="/cadastrar-disciplina" element={<DisciplineCreate />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
