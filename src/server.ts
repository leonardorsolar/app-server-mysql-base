import express from "express";
import { Router, Request, Response } from "express";
import conn from "./database";

const app = express();

const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "hello world with Typescript" });
});

//console.log(connection);

app.use(route);

// conn.query("SELECT * FROM users", (err, results) => {
//   if (err) {
//     console.error("Error executing query:", err);
//     return;
//   }
//   console.log("List of users:", results);
// });

//http://localhost:3333/list
route.get("/list", (req: Request, res: Response) => {
  conn.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    console.log("List of users:", results);

    res.status(200).json({
      status: "success",
      length: results.length,
      data: results,
    });
  });
});

app.listen(3333, () => console.log("server running on port 3333"));
