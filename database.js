const mysql = require('mysql');

let connection;

// Function to establish a database connection
const connection_db = () => {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Clientes'
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

// Database manipulation functions

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

// Exporting Functions 
module.exports = {};