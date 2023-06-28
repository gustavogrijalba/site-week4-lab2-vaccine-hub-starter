const express = require("express");
const User = require('../models/users')
const router = express.Router();

router.post("/login", async (req,res, next) => {
    try {
        //take users email and password and attempt to authenticate
        const user = await User.login(req.body)
        return res.status(200).json({ user })

    } catch(err) {
        next(err)
    }
})

router.post("/register", async (req,res, next) => {
    try {
        //take users email and password, date
        console.log(req.body); 
        const user = await User.register(req.body)
        return res.status(201).json({ user })

    } catch(err) {
        next(err)
    }
})

module.exports = router