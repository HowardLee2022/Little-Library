const express=require('express');
const router = express.Router();
const {user, book} = require('../models');

router.get("/",(req,res)=>{
    user.findAll().then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with user routes!",err})
    })
})
//Creating users
router.post("/",(req,res)=>{
    console.log(req.body)
    user.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with creating user!",err})
    })
})

router.get("/login",(req,res)=>{
    res.render("login")
})

router.get("/signup",(req,res)=>{
    res.render("signup")
})


router.post("/",(req,res)=>{
    user.create({
    username:req.body.username,
     email:req.body.email,
     password:req.body.password
    }).then(userData=>{
    //  req.session.userId = userData.id;
    //  req.session.userEmail = userData.email;
    //  res.json(userData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:"oh noes!",err})
    })
 })


















module.exports = router;