var express = require('express');
var router = express.Router({ mergeParams: true });
router.get('/', function (req, res, next) {

  if (req.session.user) {
    let getUsername = req.session.user.username
    res.render('index', { title: `Welcome ${getUsername}`, page: '../static/public/dist/home.html' });
  } else {
    res.redirect("/auth");
  }
})
module.exports = router;