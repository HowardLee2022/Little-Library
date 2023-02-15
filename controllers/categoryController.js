const express=require('express');
const router = express.Router();
const {book, category} = require('../models');

// router.get("/",(req,res)=>{
//     category.findAll().then(categoryData=>{
//         res.json(categoryData)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"Error with category routes!",err})
//     })
// })

// route to render the booksearch page
// router.get("/booksearch",(req,res)=>{
//     if(!req.session.userId){
//         return res.status(403).json({msg:"login first post"})
//      };
//     res.render("booksearch")
// })

//Creating category COME BACK TO DO DROP BOX! LIMIT ONLY 1 SELECTION FOR NOW
// router.post("/",(req,res)=>{
//     console.log(req.body)
//     category.create({
//         categoryname:req.body.categoryname,
//         bookId:req.body.bookId
//     }).then(categoryData=>{
//         res.json(categoryData)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"Error with creating category!",err})
//     })
// })

//getting book by category
// router.get("/:id",(req,res)=>{
//     category.findByPk(req.params.id,{
//         include:[book]
//     }).then(categoryData=>{
//         res.json(categoryData)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"Error with getting book and associated user!",err})
//     })
// })

// router.get("/booksearch",(req,res)=>{
//     res.render("booksearch")
// })

// Uodate a category
// router.put("/:id",(req,res)=>{
//     category.update(req.body,{
//         where:{
//             id:req.params.id
//         }
//     }).then(categoryData=>{
//         res.json(categoryData)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"Cannot edit category",err})
//     })
// });

// Delete a category
// router.delete("/:id",(req,res)=>{
//     category.destroy({
//         where:{
//             id:req.params.id
//         }
//     }).then(categoryData=>{
//         res.json(categoryData)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"Oh no, cannot delete category",err})
//     })
// });




module.exports = router;