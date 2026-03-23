const express = require('express');
const router = express.Router();
const Proyecto = require('../models/Proyecto');

// Endpoint para obtener los proyectos que se muestran en la Home
router.get('/recientes', async (req, res) => {
  try {
    // Definimos la consulta para traer los últimos 4 proyectos
    // .lean() hace que la respuesta sea un objeto JS plano (más rápido)
    const consulta = await Proyecto.find()
      .sort({ fecha: -1 })
      .limit(4)
      .lean();

    res.status(200).json(consulta);
  } catch (error) {
    res.status(500).json({ 
      mensaje: "Error al obtener proyectos de la base de datos",
      error: error.message 
    });
  }
});

module.exports = router;