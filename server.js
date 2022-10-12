const express = require("express");
const fs = require("fs");
const videosRoutes = require("./routes/videosRoutes");
require("dotenv").config();

console.log(process.env.port);
const port = process.env.port;
const app = express();
app.use(express.json()); // adds a built in middleware

app.use((req, res, next) => {
  console.log(`Incoming request:  ${req.path}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

app.use("/videos", videosRoutes);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
