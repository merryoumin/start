const express = require("express");
const aRouter = require("./routes/a");
const cors = require("cors");
const app = express();

const port = 3020;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use("/a", aRouter);

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
