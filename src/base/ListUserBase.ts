import connection from "../database";

export default class User {
  database: any;

  constructor() {
    // this.database = database.inicia();
    this.database = connection;
  }

  async getUser() {
    try {
      const [listUser] = await this.executeQuery("SELECT * FROM users");
      console.log("List of users:", listUser);
      //return listUser;
    } catch (error) {
      console.error("Error fetching users:", error);
      return [];
    }
  }

  private executeQuery(query: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.database.query(query, (error: any, results: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}
