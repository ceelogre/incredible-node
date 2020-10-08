import express, { json } from "express";
import { config } from "dotenv";

config();
const app = express();
app.use(json());

app.get("/", function (req, res) {
  res.send("Welcome to our Node Incredibles!");
});

app.get("/users", function (req, res) {
  res.send("Users will appear here");
});
app.get("/watches", function (req, res) {
  res.send("NEw watches coming soon!");
});

const port = process.env.PORT;
app.listen(port || 4000, function () {
  console.info(`Application is running locally on ${port}`);
});
