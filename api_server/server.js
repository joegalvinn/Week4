import express from "express";

const app = express();

app.use(express.json());

app.listen(8081, function () {
  console.log("server is listening on port 8081..");
});

app.get("/message", function (req, res) {
  res.json({ message: "hello weirdo" });
});

app.post("/messages", function (req, res) {
  res.json({ message: "Hello, World!" });
});
app.use(express.json());
