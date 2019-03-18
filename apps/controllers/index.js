var express = require("express");

var router = express.Router();

router.use("/admin", require(__dirname + "/admin"));

router.get("/", function(req, res) {
  //res.json({"message" : "This is Home Page"});
  res.render("test");
});

module.exports = router;
