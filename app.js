const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("public"));

// Grabs restaurant.json
let parse = JSON.parse(fs.readFileSync("api/restaurant.json"));

// Grabs each restaurant's individual information
app.get("/restaurant/:id", (req, res) => {
  parse.forEach((element) => {
    if (element.id === req.params.id) {
      console.log(element);
      res.json(element);
    }
  });
  res.send(req.query.id);
});

// formats restaurants.json's text
app.get("/api", (req, res) => {
  return res.json(parse);
});

// grabs the index page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/public/index.html");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
