import databaseClass from "./DatabaseClass";

export default class ListUser {
  database: any;

  constructor() {
    // this.database = database.inicia();
    this.database = databaseClass;
  }

  async getUser() {
    try {
      const [listUser] = await this.database.query("SELECT * FROM users");
      console.log("List of users:", listUser);
      return listUser;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }
}
