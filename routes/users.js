var express = require('express');
var router = express.Router({ mergeParams: true });

/* GET users listing. */
router.get('/', function (req, res, next) {
  req.dbPOOL.getAllUsers().then((result) => {

    res.json(result);

  }).catch((err) => {

    console.log(err)
    res.json({
      error: 1,
      txt: "An error has occured"
    });
  });
});

router.get('/:username', function (req, res, next) {

  //add check sesssion
  
  if (!req.session.user) {
    return res.json({ error: 2, redirect: "auth" })// res.redirect("/auth")
  }

  //check username paramater
  let getUsername = req.params.username;
  if (!checkName(getUsername)) return res.json({ error: 2, redirect: "home" });


  req.dbPOOL.getProfile(getUsername).then((result) => {

    res.json(result);

  }).catch((err) => {

    console.log(err)
    res.json({
      error: 1,
      txt: "An error has occured"
    });
  });
});

function checkName(value) {
  if (/^[a-zA-Z0-9]{4,13}$/g.test(value) == true) {
    return value
  } else return false

}

module.exports = router;
