const express=require('express');
const router = express.Router();
const {book, category} = require('../models');

router.get("/",(req,res)=>{
    category.findAll().then(categoryData=>{
        res.json(categoryData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with category routes!",err})
    })
})

//Creating category COME BACK TO DO DROP BOX! LIMIT ONLY 1 SELECTION FOR NOW
router.post("/",(req,res)=>{
    console.log(req.body)
    category.create({
        categoryname:req.body.categoryname,
        fiction:req.body.fiction,
        bookId:req.body.bookId
    }).then(categoryData=>{
        res.json(categoryData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with creating category!",err})
    })
})

//getting book by category
router.get("/:id",(req,res)=>{
    book.findByPk(req.params.id,{
        include:[category]
    }).then(bookData=>{
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with getting book and associated user!",err})
    })
})




module.exports = router;