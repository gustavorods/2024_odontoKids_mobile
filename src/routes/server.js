const express = require('express');
const bodyParser = require('body-parser');
const { connection_db, disconnect_db, login } = require('../database/database'); // Ajuste o caminho para o seu arquivo onde estão as funções

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Route to check login
app.post('/check_login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Chama a função de login e aguarda o resultado
    const result = await login(email, password);

    // Retorna a resposta apropriada
    if (result.success) {
      res.status(200).json({
        success: true,
        message: 'Login successful',
        table: result.table,
        id: result.id,
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  } finally {
    await disconnect_db(); // Fecha a conexão com o banco de dados
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});