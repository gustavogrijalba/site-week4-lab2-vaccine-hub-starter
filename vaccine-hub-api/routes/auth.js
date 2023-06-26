const express = require("express");
const router = express.Router();

router.post("/login", async (req,res, next) => {
    try {
        //take users email and password and attempt to authenticate

    } catch(err) {
        next(err)
    }
})

router.post("/register", (req,rest, next) => {
    try {
        //take users email and password, date

    } catch(err) {
        next(err)
    }
})

module.exports = router