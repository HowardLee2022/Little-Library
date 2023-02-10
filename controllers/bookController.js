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
    book.create({
        bookname:req.body.bookname,
        author:req.body.author,
    }).then(bookData=>{
        console.log(bookData);
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with creating book!",err})
    })
})



router.get("/upload",(req,res)=>{
    res.render("upload")
})



















module.exports = router;