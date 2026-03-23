import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import letracorporeaImg from './assets/images/letracorporea.jpg';
import viniloImg from './assets/images/vinilo.jpg';

const RotulosSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicios = [
    {
      title: "Letras Corpóreas",
      desc: "Relieve en acero, PVC o metacrilato con iluminación LED indirecta.",
      img: letracorporeaImg
    },
    {
      title: "Vinilos de Gran Formato",
      desc: "Decoración de escaparates y paredes con laminados protectores UV.",
      img: viniloImg
    },
    {
      title: "Rótulos Luminosos",
      desc: "Cajas de luz de bajo consumo para máxima visibilidad nocturna.",
      img: "/luminosos-premium.jpg"
    }
  ];

  return (
    <div className="bg-white text-slate-900 font-['Inter',sans-serif] min-h-screen">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="hidden lg:flex text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors">
            Inicio
          </Link>
          <span className="hidden lg:block font-bold text-xs tracking-widest uppercase text-gray-400">Rótulos</span>

          <button
            type="button"
            className="lg:hidden bg-[#2563eb] text-white px-4 py-2 rounded-full text-sm font-semibold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
          >
            Menú
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto px-6 pb-4 flex flex-col gap-3 text-sm font-medium text-gray-600">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2563eb] transition-colors">Inicio</Link>
            <Link to="/toldos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2563eb] transition-colors">Toldos</Link>
            <Link to="/rotulos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2563eb] transition-colors">Rótulos</Link>
            <Link to="/mobiliario" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2563eb] transition-colors">Mobiliario</Link>
          </div>
        )}
      </nav>
      
      {/* Hero Section - Estilo Apple */}
      <section className="relative pt-40 pb-20 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#2563eb] font-semibold tracking-tight uppercase text-sm mb-4 block">
            Fabricación Propia en Sevilla
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-500">
            Rótulos que definen <br/> tu negocio.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Diseñamos e instalamos soluciones de imagen corporativa en **C. Pergamino, 8** con la precisión que tu marca merece.
          </p>
          <button className="bg-[#2563eb] text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
            Solicitar Presupuesto
          </button>
        </div>
      </section>

      {/* Gallery - Bento Grid / Glassmorphism */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicios.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-all duration-500"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Glassmorphism Overlay */}
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/70 border border-white/20 p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#2563eb] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formulario de Contacto RGPD */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-center">Cuéntanos tu proyecto</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nombre" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all" />
              <input type="email" placeholder="Email" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all" />
            </div>
            <textarea placeholder="Descripción del rótulo (medidas, ubicación en Sevilla...)" rows="4" className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2563eb]/20 focus:border-[#2563eb] transition-all"></textarea>
            
            {/* RGPD Compliance */}
            <div className="flex items-start gap-3">
              <input type="checkbox" id="rgpd" className="mt-1 h-4 w-4 rounded border-gray-300 text-[#2563eb] focus:ring-[#2563eb]" required />
              <label htmlFor="rgpd" className="text-xs text-gray-500">
                He leído y acepto la Política de Privacidad. Entiendo que mis datos serán tratados para responder a mi solicitud de presupuesto en Sevilla.
              </label>
            </div>

            <button type="submit" className="w-full bg-[#2563eb] text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all active:scale-95">
              Enviar Consulta
            </button>
          </form>
        </div>
      </section>

      {/* Footer Legal */}
      <footer className="border-t border-gray-100 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-6">
          <p>© 2026 El Lado Creativo. C. Pergamino, 8, Sevilla. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/aviso-legal" className="hover:text-[#2563eb] transition-colors">Aviso Legal</Link>
            <a href="/privacidad" className="hover:text-[#2563eb] transition-colors">Privacidad</a>
            <a href="/cookies" className="hover:text-[#2563eb] transition-colors">Cookies</a>
          </div>
          <p className="italic">Prohibida la reproducción de fotos de trabajos realizados sin autorización.</p>
        </div>
      </footer>
    </div>
  );
};

export default RotulosSection;