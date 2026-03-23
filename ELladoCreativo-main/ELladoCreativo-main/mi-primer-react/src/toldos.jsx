import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

export default function App() {
  const [config, setConfig] = useState({ material: 'Textil Técnico', color: '#1d1d1f' });
  const [isSending, setIsSending] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const proyectos = [
    { id: 1, categoria: "MÁXIMA PROTECCIÓN", titulo: "Toldo Vertical y Capota", descripcion: "Soluciones ideales para fachadas y ventanas. Las capotas aportan un toque clásico.", imagen: "/toldo-vertical.jpg" }, 

    { id: 2, categoria: "DISEÑO Y ELEGANCIA", titulo: "Vela y Palillería", descripcion: "Estructuras ligeras con diseño vanguardista. Perfectas para ambientes frescos.", imagen: "/vela.jpg" },

    { id: 3, categoria: "CONFORT TODO EL AÑO", titulo: "Cerramientos Integrales", descripcion: "Aproveche su terraza en cualquier estación. Estructuras robustas de alta calidad.", imagen: "/cerramiento.jpg" },

    { id: 4, categoria: "VERSATILIDAD", titulo: "Brazo Articulado", descripcion: "Ajuste el ángulo de sombra según la posición del sol. Tecnología fácil de manejar.", imagen: "/brazo.jpg" },

    { id: 5, categoria: "SOLUCIONES TÉCNICAS", titulo: "Punto Recto y Veranda", descripcion: "La solución perfecta para balcones y lucernarios de cristal. Control térmico.", imagen: "/veranda.jpg" },

    { id: 6, categoria: "GRANDES SUPERFICIES", titulo: "Techo a Dos Aguas", descripcion: "Estructura autoportante de gran cobertura. Ideal para hostelería y jardines.", imagen: "/dos-aguas.jpg" },
  ];

  const handleContact = async () => {
    setIsSending(true);
    try {
      await new Promise(r => setTimeout(r, 1000));
      alert("Solicitud enviada con éxito.");
    } finally {
      setIsSending(false);
    }
  };

  const scrollToContacto = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-sans antialiased">
      
      {/* NAVEGACIÓN: Altura ajustable y padding responsive */}
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-100">
	  {/* Ajustamos el contenedor para que quepa bien el logo más grande */}
	  <div className="max-w-6xl mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
    
		{/* LOGO CON TAMAÑO FIJO 88x90 */}
      <img 
      src="/src/logo.png" 
      alt="Logo El Lado Creativo" 
	  className="w-[88px] h-[90px] ml-6 object-contain" 
      />

	<div className="hidden lg:flex space-x-6 lg:space-x-8 text-[10px] lg:text-[11px] font-bold tracking-widest uppercase opacity-60">
	<Link to="/" className="hover:text-black transition-colors">Inicio</Link>
      <a href="#Tipos" className="hover:text-black transition-colors">Tipos de toldos</a>
      <a href="#Material" className="hover:text-black transition-colors">Materiales</a>
      <a href="#ubicacion" className="hover:text-black transition-colors">¿Donde encontranos?</a>
      </div>

	     <button onClick={scrollToContacto}
	           className="hidden lg:inline-flex bg-[#0071e3] text-white px-5 py-2 rounded-full text-[11px] font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
      CONSULTAR
      </button>

			<button
				type="button"
				className="lg:hidden bg-[#0071e3] text-white px-4 py-2 rounded-full text-[11px] font-bold"
				onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				aria-label="Abrir menú"
			>
				Menú
			</button>
    </div>

		{isMobileMenuOpen && (
			<div className="lg:hidden max-w-6xl mx-auto px-4 pb-4 flex flex-col gap-3 text-[11px] font-bold tracking-widest uppercase opacity-70">
				<Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black transition-colors">Inicio</Link>
				<a href="#Tipos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black transition-colors">Tipos de toldos</a>
				<a href="#Material" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black transition-colors">Materiales</a>
				<a href="#ubicacion" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-black transition-colors">¿Donde encontranos?</a>
				<button onClick={scrollToContacto} className="w-fit bg-[#0071e3] text-white px-4 py-2 rounded-full text-[11px] font-bold">
					Consultar
				</button>
			</div>
		)}
  </nav>

      {/* HERO: Tamaños de texto fluidos */}
      <header className="pt-28 md:pt-40 pb-16 md:pb-24 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1] text-balance">
          Toldos en Sevilla <br /><span className="text-gray-300 montserrat">El lado creativo</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium px-4">
          Expertos en fabricación e instalación a medida para negocios y particulares.
        </p>
      </header>

      {/* CATÁLOGO RESPONSIVE: 1 col (móvil) -> 2 cols (tablet) -> 3 cols (PC) */}
      <section id="Tipos" className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {proyectos.map((p) => (
          <div key={p.id} className="group bg-[#f5f5f7] rounded-[2rem] overflow-hidden flex flex-col transition-all hover:shadow-2xl duration-500">
            <div className="h-48 md:h-64 overflow-hidden">
                <img src={p.imagen} alt={p.titulo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    onError={(e) => e.target.src = "https://via.placeholder.com/600x400?text=Toldo+Sevilla"} />
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-grow justify-end">
                <span className="text-[9px] md:text-[10px] font-black text-blue-600 tracking-widest uppercase mb-2">{p.categoria}</span>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{p.titulo}</h3>
                <p className="text-sm text-gray-500 leading-snug">{p.descripcion}</p>
            </div>
          </div>
        ))}
      </section>

            {/* SIMULADOR: De 1 columna en móvil a 2 en desktop */}
            {/* --- SECCIÓN SIMULADOR CON GRADIENTE DINÁMICO --- */}
      <section 
        id="Material" 
        className="text-white py-16 md:py-24 px-6 mt-12 relative overflow-hidden"
        style={{ 
          background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460, #53354a)' 
        }}
      >
        {/* Contenedor principal con Z-index para estar por encima del fondo */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          
          {/* COLUMNA IZQUIERDA: Selectores */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Fabricación Propia.</h2>
              <p className="text-gray-300 text-sm md:text-base max-w-md">
                Personalice su toldo con materiales de alta resistencia y nuestra gama de colores exclusivos.
              </p>
            </div>

            {/* Selector de Materiales */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                Tipo de Tejido
              </label>
              <div className="flex flex-wrap gap-3">
                {['Textil Técnico', 'PVC M2', 'Acrílico'].map(m => (
                  <button 
                    key={m} 
                    onClick={() => setConfig({...config, material: m})}
                    className={`px-5 py-2.5 rounded-xl text-[10px] md:text-[11px] font-bold border-2 transition-all ${
                      config.material === m 
                      ? 'bg-white text-black border-white shadow-lg scale-105' 
                      : 'bg-white/5 border-white/10 text-gray-300 hover:border-white/40'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector de Colores (8 Tonos) - Responsive: 4 columnas en móvil */}
            <div className="space-y-4">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                Color de Lona (Muestra Visual)
              </label>
              <div className="grid grid-cols-4 sm:flex sm:flex-wrap gap-4 md:gap-5 justify-items-center">
                {[
                  '#f5e6be', // Beige
                  '#d2b48c', // Arena
                  '#d1d5db', // Gris claro
                  '#ffffff', // Blanco
                  '#556b2f', // Verde oliva
                  '#0071e3', // Azul
                  '#dc2626', // Rojo
                  '#1d1d1f'  // Negro (Añadiremos borde claro en el estilo)
                ].map(c => (
                  <button 
                    key={c} 
                    onClick={() => setConfig({...config, color: c})}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-4 transition-all hover:scale-125 shadow-xl ${
                      config.color === c 
                      ? 'border-blue-400 scale-110 shadow-blue-500/40' 
                      : 'border-white/10'
                    }`}
                    style={{ 
                      backgroundColor: c,
                      // Si el color es negro, le damos un borde sutil para que se vea sobre el fondo oscuro
                      border: c === '#1d1d1f' && config.color !== c ? '2px solid rgba(255,255,255,0.2)' : undefined 
                    }}
                    title={`Color: ${c}`} 
                  />
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Vista Previa del Toldo */}
          <div className="relative group">
            {/* Resplandor decorativo de fondo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-[#0a0a0c]/80 backdrop-blur-sm aspect-video rounded-[2.5rem] flex items-center justify-center p-8 md:p-16 border border-white/10 shadow-2xl">
              {/* Simulación de la lona del toldo */}
              <div 
                className="w-full h-16 md:h-28 transition-all duration-700 ease-in-out shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)]" 
                style={{ 
                  backgroundColor: config.color, 
                  borderRadius: '0 0 40px 40px', 
                  borderTop: '10px solid #000',
                  filter: 'brightness(1.1)' // Un poco más de brillo para que luzca el material
                }} 
              />
              
              {/* Barra superior de soporte (Detalle técnico) */}
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-[#333] to-[#000] rounded-t-[2.5rem]" />
            </div>
            
            {/* Texto informativo debajo de la muestra */}
            <p className="text-center mt-6 text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">
              Vista previa: {config.material} / {config.color}
            </p>
          </div>

        </div>

        {/* Textura de sutil granulado para el fondo (opcional) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 md:py-32 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">¿Hablamos de su proyecto?</h2>
        <button onClick={handleContact} disabled={isSending}
                className="bg-black text-white px-10 py-4 rounded-full font-bold text-base md:text-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
          {isSending ? 'ENVIANDO...' : 'SOLICITAR CONSULTORÍA'}
        </button>
      </section>

      {/* GOOGLE MAPS */}
      <section id="ubicacion" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-[#1d1d1f]">¿Donde encontranos?</h2>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.176041641777!2d-5.9335095!3d37.3812167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126f6a916a5f97%3A0x5136b74f0c0f6106!2sEl%20Lado%20Creativo...%20M%C3%A1s%20que%20toldos!5e0!3m2!1ses!2ses!4v1715600000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>📍 C. Pergamino, 8, 41016 Sevilla</p>
            <p>📞 654 14 71 07</p>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t bg-white px-6">
        <div className="max-w-6xl mx-auto">
          {/* Enlaces Legales */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <a href="#aviso-legal" className="hover:text-[#2563eb] transition-colors">Aviso Legal</a>
            <a href="#privacidad" className="hover:text-[#2563eb] transition-colors">Política de Privacidad</a>
            <a href="#cookies" className="hover:text-[#2563eb] transition-colors">Política de Cookies</a>
          </div>

          {/* Copyright y Propiedad Intelectual */}
          <div className="text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              © 2026 El Lado Creativo | Expertos en Toldos y Publicidad en Sevilla
            </p>
            <p className="text-[9px] text-gray-300 mt-2 montserrat">
              Todos los contenidos, imágenes y logos son propiedad intelectual de El Lado Creativo.
            </p>
          </div>
        </div>
      </footer>
            {/* BARRA DE REDES SOCIALES FIJA */}
	<div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex flex-col gap-2 p-2">
        
        {/* Facebook */}
				<a href="https://facebook.com/ElLadoCreativosevilla" target="_blank" rel="noopener noreferrer" 
					className="w-10 h-10 flex items-center justify-center text-[#1877F2] hover:scale-110 transition-transform">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        {/* Instagram */}
				<a href="https://www.instagram.com/el_lado_creativo/" target="_blank" rel="noopener noreferrer"
					className="w-10 h-10 flex items-center justify-center text-[#DD2A7B] hover:scale-110 transition-transform">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        {/* TikTok */}
				<a href="https://www.tiktok.com/@el.lado.creativo5" target="_blank" rel="noopener noreferrer"
					className="w-10 h-10 flex items-center justify-center text-black hover:scale-110 transition-transform">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1 1.4.81 2.74 2.18 3.03 1.35.33 2.83-.43 3.4-1.7.14-.38.21-.78.22-1.18.02-3.41-.01-6.82.01-10.24z"/>
          </svg>
        </a>

      </div>
          </div>
  );
}
