const express = require(`express`);
const router = express.Router();
const User = require(`../models/user`);
const Img = require(`../models/pinposts`);
const {body, validationResult}  = require("express-validator");
const fetchUser = require("../middleware/fetchuser");

router.get(`/getuserposts`, fetchUser, async(req, res) => {
    try{
        const dets = await Img.find({userid: req.user.id})
        res.json(dets)
    }catch(error){
        console.log(error)
        res.status(500).send(`Internal Server Error`)
    }
})

router.get(`/getalluserposts`, fetchUser, async(req, res) => {
    try{
        const dets = await Img.find()
        res.json(dets)
    }catch(error){
        console.log(error)
        res.status(500).send(`Internal Server Error`)
    }
})

router.post(`/createpost`, fetchUser, [
    body("image").exists(),
], async(req, res) => {
    try{
        const {image, description}  = req.body
        const errors = validationResult(req)

        if (!errors.isEmpty())
        {   
            return res.status(400).json({errors: errors.array()})
        }

        const postIt = new Img({
            userid: req.user.id,
            image,
            description, 
        })
        const savePost = await postIt.save()
        res.json(savePost)

    }catch(error){
        console.log(error)
        res.status(500).send(`Internal Server Error`)
    }
})

router.delete(`/deletepost/:id`, fetchUser, async(req, res) => {
   try{
    let postIt = await Img.findById(req.params.id)
    if (!postIt)    res.status(404).send(`Not Found!`)
    if (postIt.userid.toString() !== req.user.id)   res.status(401).send(`Not Allowed`)

    postIt = await Img.findByIdAndDelete(req.params.id)
    res.json({"success": "deleted successfully!", postIt: postIt});
   }catch(error){
    console.log(error)
    res.status(500).send(`Internal Server Error`)
   }
})

module.exports = router