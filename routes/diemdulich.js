var express = require("express");
var router = express.Router();

var diemdulich_md = require("../models/diemdulich");

router.get("/diemdulich", function(req, res, next) {
  var data = diemdulich_md.getAllDiemdulich();
  data
    .then(function(ddls) {
      var data = {
        ddls: ddls,
        error: false
      };
      res.render("Pages/DiemDuLich/DiemDuLich", { data: data });
    })
    .catch(function(err) {
      res.render("Pages/DiemDuLich/DiemDuLich", {
        data: { error: "Get Post data" }
      });
    });
});

router.get("/diemdulich-add", function(req, res, next) {
  res.render("Pages/DiemDuLich/AddDDL");
});

router.post("/diemdulich-add", function(req, res, next) {
  var params = req.body;

  var data = diemdulich_md.addDiemdulich(params);

  data
    .then(function(result) {
      res.render("Pages/DiemDuLich/DiemDuLich");
    })
    .catch(function(err) {
      var data = {
        error: "Khong them duoc"
      };
      res.render("Pages/DiemDuLich/AddDDL");
    });
});

router.delete("/diemdulich-delete", function(req, res, next) {
  var dl_id = req.body.DL_ID;

  var data = diemdulich_md.deletePost(dl_id);

  if (!data) {
    res.json({ status_code: 500 });
  } else {
    data
      .then(function(result) {
        res.json({ status_code: 200 });
      })
      .catch(function(err) {
        res.json({ status_code: 500 });
      });
  }
});
module.exports = router;
