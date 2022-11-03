var express = require('express');
var router = express.Router({ mergeParams: true });
router.get('/', function (req, res, next) {

  let getUserProfile = req.query.username

  if (!checkName(getUserProfile) || !req.session.user) {
    res.redirect("/auth");
  }

  res.render('index', { title: `profile ${getUserProfile}`, page: '../static/public/dist/profile.html' });

})
function checkName(value) {
  if (/^[a-zA-Z0-9]{4,13}$/g.test(value) == true) {
    return value
  } else return false

}

module.exports = router;