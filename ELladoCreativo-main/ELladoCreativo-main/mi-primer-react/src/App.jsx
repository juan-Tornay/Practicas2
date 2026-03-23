import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home'; // Importamos tu componente Home
import RotulosSection from './RotulosSection';
import Mobiliario from './Mobiliario';
import Toldos from './toldos';
import AvisoLegal from './avisolegal';
import Politica from './politica';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toldos" element={<Toldos />} />
          <Route path="/rotulos" element={<RotulosSection />} />
          <Route path="/mobiliario" element={<Mobiliario />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/politica-privacidad" element={<Politica />} />
          <Route path="/privacidad" element={<Politica />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;