var express = require('express');
var router = express.Router({ mergeParams: true });

/* GET home page. */
router.get('/', function (req, res, next) {

  if (!req.session.user) {
    res.redirect("/auth");
  } else {
    res.redirect("/home");
  }

  // res.render('index', { title: 'Express' , page:'../static/public/dist/indexT.html'});
});
module.exports = router;






