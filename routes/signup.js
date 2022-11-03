var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {

  //add check sesssion
  if (req.body.createdUser && !req.session.user) {
    return res.json({ error: 2, redirect: "auth" })// res.redirect("/auth")
  }

  let capitalizeFirstLetter = function (string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1).toLowerCase();
  };

  let fromValidate = {}
  fromValidate.email = req.body.user.email?.trim()
  fromValidate.username = checkName(req.body.user.username?.trim())
  fromValidate.password = req.body.user.password?.trim()
  fromValidate.firstname = checkName(capitalizeFirstLetter(req.body.user.firstname?.trim()))
  fromValidate.lastname = checkName(capitalizeFirstLetter(req.body.user.lastname?.trim()))

  fromValidate.address = req.body.user.address?.trim()
  fromValidate.role = req.body.user.role?.trim()


  for (const [key, value] of Object.entries(req.body.user)) {

    if (key == "address" || key == "email") continue

    if (!checkBodyInput(value)) return res.json({ error: 1, txt: `somthing wrong with  ${key + value}` })
  }

  if (fromValidate.email) {

    if (/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i.test(fromValidate.email) != true)
      return res.json({ error: 1, txt: "Email is not valid" })
  } else {
    fromValidate.email = "N/A"
  }

  if (!fromValidate.address) {
    fromValidate.address = "N/A"
  }

  req.dbPOOL.insert(fromValidate).then((result) => {

    req.session.user = fromValidate;
    res.json(fromValidate);

  }).catch((err) => {

    console.log(err)
    res.json({
      error: 1,
      txt: "An error has occured"
    });
  });


});



function checkBodyInput(value) {
  if (value && value.length > 3)
    return true
  else
    return false

}

function checkName(value) {
  if (/^[a-zA-Z0-9]{4,13}$/g.test(value) == true) {
    return value
  } else return false

}
module.exports = router;
