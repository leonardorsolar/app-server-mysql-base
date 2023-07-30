import express from "express";
import { Router, Request, Response } from "express";
import conn from "../database";
import ListUser from "./ListUser";

const app = express();

const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

//console.log(connection);

app.use(route);

const listUser = new ListUser();
console.log(listUser.getUser());

conn.query("SELECT * FROM users", (err, results) => {
  if (err) {
    console.error("Error executing query:", err);
    return;
  }
  console.log("List of users:", results);
});

app.listen(3333, () => console.log("server running on port 3333"));
