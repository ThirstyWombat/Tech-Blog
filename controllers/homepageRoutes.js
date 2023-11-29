const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("login", { layout: "main" });
});

module.exports = router;
