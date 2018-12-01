require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");

const controller = require("./controller");

const app = express();

app.use(bodyParser.json());
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db, console.log("DB connected"));
  })
  .catch(err => console.log(err));

//End points-------------------------
app.get("/api/products", controller.getProducts);

const port = 3001;
app.listen(port, () => console.log(` Listening on port ${port} `));
