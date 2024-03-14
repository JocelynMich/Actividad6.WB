const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');

const connection = mysql.createConnection({
  host:"localhost",
  user:'root',
  password:'K1m_D0kja20KAJ2M',
  database: 'DiseñoAplicacionesWeb'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión a la base de datos MySQL establecida correctamente.');
});

module.exports = connection;
