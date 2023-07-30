import conn from "../database";

export default class ListUser {
  database: any;

  constructor() {
    // this.database = database.inicia();
    this.database = conn;
  }

  async getUser() {
    try {
      // Executa a consulta para listar os usuários da tabela "users"
      const query = "SELECT * FROM users";
      conn.query(query, (err, results) => {
        if (err) {
          console.error("Error executing query:", err);
          return;
        }
        console.log("List of users:", results);
      });
      // const [listUser] = await this.database.query("SELECT * FROM users");
      // console.log("List of users:", listUser);
      //return listUser;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
}
