const express = require("express");
const app = express();
const moment = require("moment");

const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name || "DaScOrPiO";
  const track = req.query.track || "backend";
  const now = new Date();
  const timeUtc = now.toISOString().split(".")[0] + "Z";
  const day = moment().format("dddd");
  const githubFileUrl =
    "https://github.com/DaScOrPiO/Taskone/blob/main/index.js";
  const repoUrl = "https://github.com/DaScOrPiO/Taskone";

  const values = {
    slack_name: slack_name,
    current_day: day,
    utc_time: timeUtc,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: repoUrl,
    status_code: 200,
  };

  res.status(200).json(values);
});

app.listen(port, () => console.log(`Server started at port: ${port}`));
