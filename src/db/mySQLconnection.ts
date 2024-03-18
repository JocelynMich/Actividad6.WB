import mysql from "mysql";

const connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'K1m_D0kja20KAJ2M',
    database:"DiseñoAplicacionesWeb",
});

export default connection;