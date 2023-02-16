const express=require('express');
const router = express.Router();
const {user, book,category} = require('../models');
const bcrypt = require("bcrypt");

router.get("/login",(req,res)=>{
    res.render("login")
})

router.get("/signup",(req,res)=>{
    res.render("signup")
})

router.get("/logout",(req,res)=>{
    req.session.destroy();
    res.render("home")
})

// route to create user and then login 
router.post("/",(req,res)=>{
    user.create({
    username:req.body.username,
     email:req.body.email,
     password:req.body.password
    }).then(userData=>{
     req.session.userId = userData.id;
     req.session.userEmail = userData.email;
     res.json(userData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:"oh noes!",err})
    })
 })
 
// Route to login the user
 router.post("/login",(req,res)=>{
    user.findOne({
    where:{
     email:req.body.email
    }
    }).then(userData=>{
     if(!userData){
         return res.status(401).json({msg:"incorrect email or password"})
     } else {
         if(bcrypt.compareSync(req.body.password,userData.password)){
             req.session.userId = userData.id;
             req.session.userEmail = userData.email;
             return res.json(userData)
         } else {
             return res.status(401).json({msg:"incorrect email or password"})
         }
     }
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:"oh noes!",err})
    })
 })

//route to display all the book that the user uploaded
  router.get("/book/own",(req,res)=>{
      if(!req.session.userId){
        return res.render("home")
     };
    book.findAll({
       where: {ownerId:req.session.userId}
    }).then(bookData=>{
        const data = bookData.map(book=>book.toJSON());
        res.render("mybooks", {
        userdate:data,
        session:req.session})
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with getting book and associated owner",err})
    })
})

//route to delete a book that the user upload
router.delete("/book/:id",(req,res)=>{
    book.destroy({
        where:{
            id:req.params.id
        }
    }).then(bookData=>{
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Oh no, cannot delete book",err})
    })
});



module.exports = router;