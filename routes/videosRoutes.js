const router = require("express").Router();
const videoData = require("../data/videos.json");
const fs = require("fs");

router
  .get("/:id", (req, res) => {
    function isMatch(video) {
      return video.id === req.params.id;
    }
    console.log(req.params.id);
    res.send(videoData.find(isMatch));
  })
  .get("/", (req, res) => {
    res.send(videoData);
  })
  .post("/", (req, res) => {
    // create a new video
    // receive details all of video from client
    // receive object that has all the data that the videos have
    console.log(videoData.length);
    videoData.push(req.body);
    console.log(videoData.length);

    fs.writeFile("./data/videos.json", JSON.stringify(videoData), (err) => {
      if (err) {
        console.error(err);
      }
      console.log("success");
    });
    res.send("receive post");
  });
module.exports = router;
