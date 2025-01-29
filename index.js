const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "fkariuki311@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Faith-K-commits/hng-stage-0",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
