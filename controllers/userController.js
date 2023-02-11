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

// Find book and users 
router.get("/:id",(req,res)=>{
    user.findByPk(req.params.id,{
        include:[book]
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with getting user and associated books",err})
    })
})
























module.exports = router;