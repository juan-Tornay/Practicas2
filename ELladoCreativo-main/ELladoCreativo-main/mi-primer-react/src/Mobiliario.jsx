import React from 'react';
import { ArrowLeft, Box, LayoutPanelLeft, Ruler } from 'lucide-react';

const Mobiliario = () => {
  const proyectos = [
    {
      title: "Mobiliario para Hostelería",
      desc: "Mesas, barras y estanterías diseñadas para resistir el uso intensivo con estilo.",
      img: "/mobiliario-hosteleria.jpg",
      icon: <Box className="w-5 h-5" />
    },
    {
      title: "Oficinas de Vanguardia",
      desc: "Escritorios y soluciones de almacenamiento que fomentan la productividad.",
      img: "/mobiliario-oficina.jpg",
      icon: <LayoutPanelLeft className="w-5 h-5" />
    },
    {
      title: "Proyectos Especiales",
      desc: "Piezas únicas fabricadas bajo demanda para proyectos de interiorismo.",
      img: "/mobiliario-medida.jpg",
      icon: <Ruler className="w-5 h-5" />
    }
  ];

  return (
    <div className="bg-[#f5f5f7] min-h-screen font-['Inter',sans-serif]">
      
      {/* Botón Volver - Estilo Apple */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            Inicio
          </a>
          <span className="font-bold text-xs tracking-widest uppercase text-gray-400">Mobiliario & Espacios</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Diseño de autor para <br/> 
            <span className="text-[#2563eb]">interiores exigentes.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Combinamos la fabricación artesanal en **Sevilla** con tecnología de corte precisa para crear piezas que definen tu identidad.
          </p>
        </div>
      </section>

      {/* Grid de Servicios/Proyectos */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {proyectos.map((p, idx) => (
            <div key={idx} className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square w-full overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Card Content con Glassmorphism */}
              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-lg bg-white/80 border border-white/40 p-8 rounded-[2rem] shadow-lg">
                <div className="text-[#2563eb] mb-3">{p.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity">
                  Consultar proyecto
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bloque de Calidad Local */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-black text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Tienes un local en Sevilla?</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Visítanos en **C. Pergamino, 8** y descubre cómo podemos transformar tu espacio con mobiliario a medida de alta gama.
            </p>
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-[#2563eb] hover:text-white transition-all transform hover:scale-105">
              Llama al 654 14 71 07
            </button>
          </div>
          {/* Sutil gradiente de fondo */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb] opacity-10 blur-[100px]"></div>
        </div>
      </section>

      {/* Footer Legal */}
      <footer className="py-16 px-6 bg-white border-t border-gray-100 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <p className="font-bold text-lg mb-2">El Lado Creativo</p>
            <p className="text-gray-400 text-sm">Expertos en fabricación propia en Sevilla.</p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-6 text-xs font-medium text-gray-500">
              <Link to="/aviso-legal" className="hover:text-[#2563eb]">Aviso Legal</Link>
              <a href="/privacidad" className="hover:text-[#2563eb]">Política de Privacidad</a>
              <a href="/cookies" className="hover:text-[#2563eb]">Política de Cookies</a>
            </div>
            <p className="text-[10px] text-gray-300 uppercase tracking-[0.2em]">
              Propiedad Intelectual: Todos los diseños mostrados son proyectos realizados por nuestro equipo técnico.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Mobiliario;