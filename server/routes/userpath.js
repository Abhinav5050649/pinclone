const express = require(`express`);
const router = express.Router();
const User = require(`../models/user`);
const Img = require(`../models/pinposts`);
const {body, validationResult}  = require("express-validator");
const fetchUser = require("../middleware/fetchuser");

router.get(`/getuserposts`, fetchUser, async(req, res) => {
    try{
        const dets = await Img.find({userid: req.user._id})
        res.json(dets)
        console.log(`Success!`)
    }catch(error){
        console.log(error)
        res.status(500).send(`Internal Server Error`)
    }
})

router.get(`/getalluserposts`, fetchUser, async(req, res) => {
    try{
        const dets = await Img.find()
        res.json(dets)
        console.log(`Success!`)
    }catch(error){
        console.log(error)
        res.status(500).send(`Internal Server Error`)
    }
})

router.post(`/createpost`, fetchUser, async(req, res) => {

})

router.delete(`/deletepost/:id`, fetchUser, async(req, res) => {

})

module.exports = router