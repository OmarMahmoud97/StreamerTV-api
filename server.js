const express = require("express");
const fs = require("fs");
const videosRoutes = require("./routes/videosRoutes");

const app = express();
app.use(express.json()); // adds a built in middleware

app.use((req, res, next) => {
  console.log(`Incoming request:  ${req.path}`);
  next();
});

const port = 8080;
app.get("/", (req, res) => {
  res.send("Hello World, from express");
});

app.use("/videos", videosRoutes);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
