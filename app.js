const express = require("express");

const translate = require("translate-google");

const app = express();

app.use(express.json());

app.post("/translate", async (req, res) => {
  const { msg, to } = req.body;
  const translation = await translate(msg, { from: "auto", to: to });

  res.status(200).json({ translation });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("app is running....");
});
