const express=require('express');
const router = express.Router();
const {user, book, category} = require('../models');

router.get("/",(req,res)=>{
    book.findAll().then(bookData=>{
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with user routes!",err})
    })
})
//Creating book
router.post("/",(req,res)=>{
    if(!req.session.userId){
        return res.status(403).json({msg:"login first post"})
     };
    book.create({
        bookname:req.body.bookname,
        author:req.body.author,
        categoryId:req.body.categoryId,
        //userId:req.session.userId
    }).then(bookData=>{
        console.log(bookData);
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with creating book!",err})
    })
})





















module.exports = router;