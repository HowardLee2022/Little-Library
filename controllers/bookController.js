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
    console.log(req.body)
    book.create({
        bookname:req.body.bookname,
        author:req.body.author,
        categoryId:req.body.categoryId,
        userId:req.body.userId
    }).then(bookData=>{
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with creating book!",err})
    })
})

//getting user by book
router.get("/:id",(req,res)=>{
    book.findByPk(req.params.id,{
        include:[user]
    }).then(bookData=>{
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with getting book and associated user!",err})
    })
})




module.exports = router;