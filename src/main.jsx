import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './carrusel.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Carrusel from './Carrusel';
import Box from './Box.jsx';
import Skincare from './Skincare.jsx';
import Productos from './Productos.jsx';
import Favoritos from './Favoritos.jsx';
import Rutinas from './Rutinas.jsx';
import Maquillaje from './Maquillaje.jsx';
import Rutines from './Rutines';
import Profile from './Profile.jsx';
import Ofertas from './Ofertas.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/proyecto-final' >
      <Header />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carrusel className="carrusel-margin-bottom" />
              <Box />
              <Productos />
              <Favoritos />
              <Rutinas />
            </>
          }
        />
        {/* Página de Skincare */}
        <Route path="/skincare" element={<Skincare />} ></Route>
        <Route path="/rutinas" element={<Rutines />} ></Route>
        <Route path="/profile" element={<Profile />} ></Route>
        <Route path="/maquillaje" element={<Maquillaje />} ></Route>
        <Route path="/ofertas" element={<Ofertas></Ofertas>} ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);