import mysql from "mysql";

class DatabaseClass {
  private connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "db-users",
    });

    this.connection.connect((err) => {
      if (err) {
        console.error("Error connecting to database...", err);
        return;
      }
      console.log("Connection established!");
    });
  }

  query(statement: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      this.connection.query(statement, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  close(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.connection.end((err) => {
        if (err) {
          reject(err);
        } else {
          console.log("The connection was closed.");
          resolve();
        }
      });
    });
  }
}

const databaseClass = new DatabaseClass();
export default databaseClass;
