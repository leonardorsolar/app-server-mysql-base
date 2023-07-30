import mysql from "mysql";

const conn = mysql.createConnection({
  host: "localhost", // O host do banco. Ex: localhost
  user: "root", // Um usuário do banco. Ex: user
  password: "root", // A senha do usuário. Ex: user123
  database: "db-users", // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

conn.connect((err) => {
  if (err) {
    console.error("Erro connecting to database...", err);
    return;
  }
  console.log("Connection established!");

  // Executa a consulta para listar os usuários da tabela "users"
  const query = "SELECT * FROM users";

  conn.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    //console.log("List of users:", results);

    // Fecha a conexão após a consulta ser executada (opcional)
    // connection.end((err) => {
    //   if (err) {
    //     console.error("Error closing connection...", err);
    //     return;
    //   }
    //   console.log("The connection was closed.");
    // });
  });
});

export default conn;
