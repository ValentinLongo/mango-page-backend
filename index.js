const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

// Ruta POST para recibir el mensaje de contacto
app.post('/mensaje-contacto', async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;
    
    // Hacer la solicitud POST a la URL indicada (usando HTTP)
    const response = await axios.post('http://52.67.131.88:3000/mensaje-contacto', {
      nombre,
      email,
      mensaje
    });

    // Analizar la respuesta y enviarla de vuelta al cliente
    res.json(response.data);
  } catch (error) {
    // Manejar errores
    console.error('Error al enviar el mensaje de contacto:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
