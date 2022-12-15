import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import StarshipsPage from './pages/StarshipsPage/StarshipsPage';
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route element={<HomePage/>} path="/"/>
        <Route element={<StarshipPage/>} path="/starships/:id"/>
        <Route element={<StarshipsPage/>} path="/starships"/>
      </Routes>
    </>
  );
}

export default App;
