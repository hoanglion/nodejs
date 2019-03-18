var express = require('express');
var router = express.Router();

/* ----------------------------------GET -Login page.--------------- */
router.get('/login', function(req, res, next) {
  res.render('Pages/Login/Login');
});
/* ------------------------------------GET Home page. ----------------------------*/
router.get('/', function(req, res, next) {
  res.render('Pages/Home/Home');
});
/* -------------------------------GET Area page. -----------------------*/
router.get('/area', function(req, res, next) {
  res.render('Pages/Area/Area');
});
/*----------------------------- GET Category page.----------------------------------- */
router.get('/category', function(req, res, next) {
  res.render('Pages/Category/Category');
});
/* -----------------------------GET Profile page.------------------------------ */
router.get('/profile', function(req, res, next) {
  res.render('Pages/Profile/Profile');
});
module.exports = router;
