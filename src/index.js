import express from "express";
import cors from "cors";
import mysql from "mysql2";

import foodRouter from "./routes/foodRoutes.js";
import rootRouter from "./routes/rootRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(rootRouter);
app.get("/demo", (request, response) => {
  response.send({ id: 1, hoTen: "khánh" });
});
// yarn add cors
app.listen(8080);

// const connect = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   port: "3306",
//   database: "db_food1",
// });



