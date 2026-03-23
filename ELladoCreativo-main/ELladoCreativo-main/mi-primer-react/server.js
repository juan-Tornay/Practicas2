import express from 'express'; // Menor fatiga ejecutiva al navegar por el proyecto. Facilita el hiperfoco en un solo punto del flujo sin perder el contexto global. Permite delegar tareas de "bajo interés" y centrarse en la lógica compleja.Reduce la disarmonía al saltar entre capas del stack.
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Configuración de variables de entorno
dotenv.config();

const app = express();

// Middlewares esenciales
app.use(cors()); // Permite que tu React (vite) se conecte al backend
app.use(express.json()); // Para que el servidor entienda JSON

// 1. Conexión a la Base de Datos
// Reemplaza la URL por tu cadena de conexión de MongoDB Atlas
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/ladoCreativo';

mongoose.connect(mongoURI)
  .then(() => console.log('✅ Conexión exitosa a MongoDB'))
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

// 2. Definición del Modelo (Estructura de la tabla/colección)
const ProyectoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  categoria: { type: String, required: true },
  imagen: { type: String, default: 'https://via.placeholder.com/400' },
  descripcion: String,
  fecha: { type: Date, default: Date.now }
});

const Proyecto = mongoose.model('Proyecto', ProyectoSchema);

// 3. Endpoints (Rutas)

// GET: Obtener proyectos para la Home
app.get('/api/proyectos/recientes', async (req, res) => {
  try {
    // REGLA DE ORO: 'consulta' para la lógica de DB
    const consulta = await Proyecto.find()
      .sort({ fecha: -1 })
      .limit(6)
      .lean();

    res.status(200).json(consulta);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener proyectos", error: error.message });
  }
});

// POST: Recibir una nueva configuración de toldo (del formulario)
app.post('/api/configuraciones', async (req, res) => {
  try {
    // REGLA DE ORO: 'consulta' para capturar los datos del body
    const consulta = req.body;

    console.log("--- Nueva solicitud recibida ---");
    console.log("Detalles:", consulta);

    // Aquí podrías guardar 'consulta' en otra colección de "Presupuestos"
    // const nuevoPresupuesto = await Presupuesto.create(consulta);

    res.status(201).json({
      success: true,
      message: '¡Configuración recibida con éxito!',
      dataReceived: consulta
    });
  } catch (error) {
    res.status(400).json({ message: "Error al procesar la solicitud", error: error.message });
  }
});

// 4. Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

// 5. Inicio del servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor Senior corriendo en http://localhost:${PORT}`);
});