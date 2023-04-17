const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();
const client = new PrismaClient();

router.post("/", async (req, res) => {
  //코드가 위에서 아래로 통신 하기 때문에
  try {
  } catch (error) {
    console.error();
  }
});

router.get("/", async (req, res) => {
  try {
    res.json({ ok: true, todos });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
