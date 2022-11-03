var express = require('express');
var router = express.Router();
router.get("/", function (req, res) {

    //Check logged user 
    if (!req.session.user) {
        return res.redirect("/auth")
    }

    //check username value
    let getUsername = req.query.username;
    if (!checkName(getUsername)) {
        return res.redirect("/home")
    }

    //Delete user from DB
    req.dbPOOL.deleteUser(getUsername).then((result) => {

        //if the logged user (admin) deletes his own accoun
        if (req.session.user.username == getUsername) {
            return res.redirect("logout")
        }

        //Redirect to Home after the logged Evil User deletes another user !
        res.redirect("/home")


    }).catch((err) => {

        console.log(err)
        res.redirect("/home")

    });
});
function checkName(value) {
    if (/^[a-zA-Z0-9]{4,13}$/g.test(value) == true) {
        return value
    } else return false

}

module.exports = router;