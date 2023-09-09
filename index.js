const express = require("express");
const app = express();
const moment = require("moment");

const port = process.env.PORT || 3000;

const day = moment().format("dddd");
const utcTime = moment.utc().format();
const githubFileUrl = "https://www.github.com/DaScOrpIo/file.js";
const repoUrl = "https://www.github.com/DaScOrPiO/repo";

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name || "DaScOrPiO";
  const track = req.query.track || "backend";
  const statusCode = res.status(200).statusCode;

  const values = {
    slack_name: slack_name,
    current_day: day,
    utc_time: utcTime,
    track: track,
    github_file_url: githubFileUrl,
    github_repo_url: repoUrl,
    status_code: statusCode,
  };

  res.json(values);
});

app.listen(port, () => console.log(`Server started at port: ${port}`));
