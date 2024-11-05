const mysql = require('mysql');

let connection;

// Function to establish a database connection
const connection_db = () => {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'odontokids'
  });

  return new Promise((resolve, reject) => {
    connection.connect(err => {
      if (err) {
        console.error('Error connecting to the database:', err);
        return reject(err);
      }
      console.log('Connected to the database');
      resolve();
    });
  });
};

// Function to close the database connection
const disconnect_db = () => {
  if (connection) {
    return new Promise((resolve, reject) => {
      connection.end(err => {
        if (err) {
          console.error('Error disconnecting from the database:', err);
          return reject(err);
        }
        console.log('Disconnected from the database');
        resolve();
      });
    });
  }
};

// Function to login
const login = async (email, password) => {
  await connection_db(); // Ensure the database connection is established

  // Query to check in the 'responsavel' table
  let query = 'SELECT id FROM responsavel WHERE email = ? AND senha = ?';
  let results = await new Promise((resolve, reject) => {
    connection.query(query, [email, password], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });

  if (results.length > 0) {
    // User found in 'responsavel'
    return { success: true, table: 'responsavel', id: results[0].id };
  }

  // Query to check in the 'medico' table
  query = 'SELECT id FROM medico WHERE email = ? AND senha = ?';
  results = await new Promise((resolve, reject) => {
    connection.query(query, [email, password], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });

  if (results.length > 0) {
    // User found in 'medico'
    return { success: true, table: 'medico', id: results[0].id };
  }

  // If no user is found in both tables
  return { success: false, table: null, id: null };
};

// Exporting Functions 
module.exports = {
  connection_db,
  disconnect_db,
  login
};
