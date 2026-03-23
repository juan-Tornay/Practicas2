import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toldoAsador from './assets/images/toldoAsador.jpg';
import ropaImg from './assets/images/ropa2.jpg';
import logoImg from './assets/images/logo.jpg';

const Home = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para scroll suave al inicio
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#1d1d1f] bg-[#fbfbfd]">
      {/* 1. NAVBAR (Apple Glassmorphism) */}
      <nav className="w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={scrollToTop}
          >
            <img
              src={logoImg}
              alt="Logo El Lado Creativo"
              className="w-[88px] h-[88px] md:w-[120px] md:h-[120px] object-contain"
            />
          </div>
          
          <div className="hidden lg:flex space-x-8 text-sm font-medium text-gray-500">
            <button onClick={scrollToTop} className="hover:text-[#2563eb] transition-colors">Inicio</button>
            <Link to="/toldos" className="hover:text-[#2563eb] transition-colors">Toldos</Link>
            <Link to="/rotulos" className="hover:text-[#2563eb] transition-colors">Rótulos</Link>
            <a href="#ropa" className="hover:text-[#2563eb] transition-colors">Ropa Laboral</a>
            <a href="#contacto" className="hover:text-[#2563eb] transition-colors">Contacto</a>
          </div>

          <a 
            href="#contacto" 
            className="hidden lg:inline-flex bg-[#2563eb] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all active:scale-95"
          >
            Presupuesto
          </a>

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
          <div className="lg:hidden max-w-7xl mx-auto mt-3 pb-2 flex flex-col gap-3 text-sm font-medium text-gray-600">
            <button onClick={scrollToTop} className="text-left hover:text-[#2563eb] transition-colors">Inicio</button>
            <Link to="/toldos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2563eb] transition-colors">Toldos</Link>
            <Link to="/rotulos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2563eb] transition-colors">Rótulos</Link>
            <a href="#ropa" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2563eb] transition-colors">Ropa Laboral</a>
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#2563eb] transition-colors">Contacto</a>
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-fit bg-[#2563eb] text-white px-5 py-2 rounded-full text-sm font-semibold"
            >
              Presupuesto
            </a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION & BENTO GRID */}
      <main className="flex-grow pt-12 pb-20 px-6 max-w-7xl mx-auto w-full">
        
        {/* Header SEO */}
        <header className="mb-16 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Soluciones visuales <br />
            <span className="text-[#2563eb]">hechas en Sevilla.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Desde <b>C. Pergamino, 8</b>, diseñamos y fabricamos toldos, rótulos y mobiliario premium. 
            Calidad artesanal con estética vanguardista.
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          
          {/* SECCIÓN TOLDOS (La más grande: 2x2) */}
          <div id="toldos" className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500">
            <img 
              src="/toldos-sevilla-premium.jpg" 
              alt="Instalación de toldos en Sevilla" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-between">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/toldos.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="relative z-10">
                <span className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2 block">Fabricación Propia</span>
                <h3 className="text-[#2563eb] text-4xl font-bold">Toldos y <br/> Cerramientos</h3>
              </div>
              <div className="relative z-10">
                <p className="text-white/70 mb-6 max-w-sm">Protección solar inteligente con diseño arquitectónico para Sevilla.</p>
                <button className="w-fit bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-[#2563eb] hover:text-white transition-all transform group-hover:translate-y-[-5px]">
                  Configurar Lona
                </button>
              </div>
            </div>
          </div>

          {/* RÓTULOS (2x1) */}
          <div id="rotulos" className="md:col-span-2 group relative overflow-hidden rounded-[2.5rem] bg-gray-900 shadow-sm hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500">
            <img 
              src="/rotulos-gran-formato.jpg" 
              alt="Rótulos e impresiones en Sevilla" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <img
                src={toldoAsador}
                alt="Toldo instalado en local"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <h3 className="relative z-10 text-white text-3xl font-bold">Rótulos e Impresión</h3>
              <p className="relative z-10 text-white/60 mt-2">Comunicación visual de gran impacto.</p>
            </div>
          </div>

          {/* ROPA LABORAL (1x1) */}
          <div id="ropa" className="group relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-200 p-10 flex flex-col justify-between hover:border-[#2563eb] hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer">
            <img
              src={ropaImg}
              alt="Ropa laboral personalizada"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="relative z-10 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#2563eb] transition-colors">
              <svg className="w-6 h-6 text-[#2563eb] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold">Ropa Laboral</h3>
              <p className="text-gray-400 text-sm mt-1">Tu equipo, tu marca.</p>
            </div>
          </div>

          {/* MERCHANDISING (1x1) */}
          <div id="merchandising" className="group relative overflow-hidden rounded-[2.5rem] bg-[#1d1d1f] p-10 flex flex-col justify-between hover:bg-[#2563eb] hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer">
            <h3 className="text-white text-xl font-bold">Merchandising <br/>Premium</h3>
            <span className="text-white/40 group-hover:text-white transition-colors font-medium text-sm">Ver Catálogo &rarr;</span>
          </div>

          {/* MOBILIARIO (4x1 - Barra inferior) */}
          <div id="mobiliario" className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 p-10 flex flex-col md:flex-row items-center justify-between hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500">
            <div className="max-w-md">
              <h3 className="text-3xl font-bold mb-2">Mobiliario de Diseño</h3>
              <p className="text-gray-500">Creamos espacios únicos para hostelería y particulares en toda la provincia de Sevilla.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link to="/mobiliario" className="px-8 py-3 rounded-full border-2 border-[#1d1d1f] font-bold hover:bg-[#1d1d1f] hover:text-white transition-all inline-block">
                Explorar Soluciones
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* 3. CONTACTO (RGPD Compliant) */}
      <section id="contacto" className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">¿Hablamos?</h2>
            <p className="text-gray-500">Cuéntanos tu idea. Estamos en <b>C. Pergamino, 8, Sevilla</b>.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-2">Nombre</label>
                <input type="text" placeholder="Ej: Juan Pérez" className="input-premium" required />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-2">Email</label>
                <input type="email" placeholder="juan@empresa.com" className="input-premium" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-2">Mensaje</label>
              <textarea placeholder="¿Qué necesitas para tu negocio?" rows="5" className="input-premium resize-none" required></textarea>
            </div>
            
            {/* RGPD CHECKBOX */}
            <div className="flex items-start p-2">
              <input 
                type="checkbox" 
                id="rgpd" 
                className="mt-1.5 w-4 h-4 text-[#2563eb] rounded border-gray-300 focus:ring-[#2563eb] cursor-pointer"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                required
              />
              <label htmlFor="rgpd" className="ml-3 text-sm text-gray-500 leading-relaxed">
                He leído y acepto la <a href="/politica-privacidad" className="text-[#2563eb] hover:underline font-medium">Política de Privacidad</a>. Consiento que El Lado Creativo use mis datos para responder a mi solicitud.
              </label>
            </div>

            <button 
              type="submit" 
              disabled={!agreedToTerms}
              className={`w-full py-4 rounded-full font-bold text-white transition-all duration-300 ${
                agreedToTerms 
                ? 'bg-[#2563eb] hover:bg-blue-700 shadow-xl shadow-blue-500/20 active:scale-[0.98]' 
                : 'bg-gray-300 cursor-not-allowed opacity-50'
              }`}
            >
              Enviar Solicitud
            </button>
          </form>
        </div>
      </section>

      {/* 4. FOOTER (Legal & SEO) */}
      <footer className="bg-[#1d1d1f] text-gray-400 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-white text-2xl font-bold block mb-4">El Lado Creativo</span>
              <p className="max-w-sm leading-relaxed">
                Transformamos espacios comerciales y particulares con soluciones de alta gama. 
                Orgullosos de nuestra fabricación propia en Sevilla.
              </p>
            </div>
            <div>
              <span className="text-white font-semibold block mb-4">Ubicación</span>
              <p>Calle Pergamino, 8</p>
              <p>41006 - Sevilla</p>
              <p className="mt-4 text-[#2563eb] font-bold">Fabricación directa</p>
            </div>
            <div>
              <span className="text-white font-semibold block mb-4">Legal</span>
              <ul className="space-y-2 text-sm">
                <li><Link to="/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</Link></li>
                <li><Link to="/politica-privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
                <li><a href="/cookies" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[12px] space-y-4 md:space-y-0 text-center md:text-left">
            <p>© {new Date().getFullYear()} El Lado Creativo. Sevilla, España.</p>
            <p className="italic">Todos los diseños y fotografías de proyectos mostrados son propiedad intelectual de la empresa.</p>
          </div>
        </div>
      </footer>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-2 p-2">
        <a href="https://facebook.com/ElLadoCreativosevilla" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-[#1877F2] hover:scale-110 transition-transform">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        <a href="https://www.instagram.com/el_lado_creativo/" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-[#DD2A7B] hover:scale-110 transition-transform">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        <a href="https://www.tiktok.com/@el.lado.creativo5" target="_blank" rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-black hover:scale-110 transition-transform">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1 1.4.81 2.74 2.18 3.03 1.35.33 2.83-.43 3.4-1.7.14-.38.21-.78.22-1.18.02-3.41-.01-6.82.01-10.24z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;