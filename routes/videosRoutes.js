const router = require("express").Router();
const videoData = require("../data/videos.json");
const fs = require("fs");

router
  .get("/:id", (req, res) => {
    function isMatch(video) {
      return video.id === req.params.id;
    }
    res.json(videoData.find(isMatch));
  })
  .get("/", (req, res) => {
    res.json(videoData);
  })
  .post("/", (req, res) => {
    videoData.push(req.body);
    fs.writeFileSync("./data/videos.json", JSON.stringify(videoData), (err) => {
      if (err) {
        console.error(err);
      }
      console.log("success");
    });
    res.json("receive post");
  });
module.exports = router;
