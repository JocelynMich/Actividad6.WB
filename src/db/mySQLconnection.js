"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql_1 = require("mysql");
var connection = mysql_1.default.createConnection({
    host: "localhost",
    user: 'root',
    password: 'K1m_D0kja20KAJ2M',
    database: "DiseñoAplicacionesWeb",
});
exports.default = connection;
