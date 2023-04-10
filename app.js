const express = require("express");

const app = express();

const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello, express!");
});

app.get("/abc", (req, res) => {
  res.send("abc");
});

app.post("/", (req, res) => {
  res.send("This is a POST request");
});

app.put("/", (req, res) => {
  res.send("This is a PUT request");
});

app.delete("/", (req, res) => {
  res.send("This is a DELETE request");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
