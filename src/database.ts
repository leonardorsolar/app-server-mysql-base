import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost", // O host do banco. Ex: localhost
  user: "root", // Um usuário do banco. Ex: user
  password: "root", // A senha do usuário. Ex: user123
  database: "db-users", // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

conn.connect();

export default conn;
