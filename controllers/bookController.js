const express=require('express');
const router = express.Router();
const {user, book} = require('../models');

router.get("/",(req,res)=>{
    book.findAll().then(bookData=>{
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with user routes!",err})
    })
})
//Creating ubook
router.post("/",(req,res)=>{
    console.log(req.body)
    book.create({
        bookname:req.body.bookname,
        author:req.body.author,
        category:req.body.category,
        userId:req.body.userId
    }).then(bookData=>{
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with creating book!",err})
    })
})





















module.exports = router;