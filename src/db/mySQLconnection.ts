import mysql from "mysql2";

const connection = mysql.createConnection({
    user:'root',
    password:'K1m_D0kja20KAJ2M',
    database:"DiseñoAplicacionesWeb",
});

export default connection;