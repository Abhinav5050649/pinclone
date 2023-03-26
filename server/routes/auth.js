const express = require(`express`)
const User = require(`../models/user`)
const {body, validationResult} = require(`express-validator`)
const router = express.Router()
const bcrypt = require(`bcryptjs`)
const jwt = require(`jsonwebtoken`)
const fetchUser = require(`../middleware/fetchuser`)
const JWT_SECRET = "pinClone"

router.post(`/createuser`, [
    body("name").isLength({min: 3}),
    body("email").isEmail(),
    body("password").isLength({min: 5}),
], async(req, res) => {
    
})