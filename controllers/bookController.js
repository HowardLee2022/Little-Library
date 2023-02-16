const express=require('express');
const router = express.Router();
const {user, book, category} = require('../models');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "diwgmpnbw",
    api_key: "512739967525622",
    api_secret: "Vxo6GxnN1TR3Zne-JlqupY1yI8s"
  });

//route to create a book
router.post("/",(req,res)=>{
    console.log(req.body)
    if(!req.session.userId){
        return res.status(403).json({msg:"login first"})
     };
    book.create(
        {
        bookname:req.body.bookname,
        author:req.body.author,
        url:req.body.url,
        categoryId:req.body.categoryId,
        ownerId:req.session.userId
    }
    
    ).then(bookData=>{
        // console.log(bookData);
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with creating book!",err})
    })
})

router.get("/upload",(req,res)=>{
    if(!req.session.userId){
        return res.render("home")
        // return res.status(403).json({msg:"login first"})
     };
    res.render("upload",{
        session:req.session})
})




// user borrow a book
router.put("/:id",(req,res)=>{
    book.findOne({
    where:{
    borrowerId:req.session.userId
    }
    }).then(userData => {
        if(userData){
            return res.status(401).json({msg:"You already borrowed a book!"})
        }else{
            book.update({
                borrowerId:req.session.userId
            },{
                where:{
                    id:req.params.id
                }
            }).then(bookData=>{
                res.json(bookData)
    })
    }
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Cannot edit book",err})
    })
});



//find all book by category and borrowerId is null to represent noone has borrow the book
router.get("/category/:id", (req, res) => {
    book
      .findAll({
        include: [
          {
            model: user,
            as: "owner",
          },
          {
            model: user,
            as: "borrower",
          },
        ],
        where: { categoryId: req.params.id, borrowerId: null },
      })
      .then(bookData=> {
        console.log(bookData)
        const data = bookData.map(book=>book.toJSON());
        res.render("results", {
        userdate:data,
        session:req.session})
      })
  });

//Route to display the book the user is currently borrowing
  router.get("/currentuser/book", (req, res) => {
    if(!req.session.userId){
        return res.render("home")
     };
    book
      .findAll({include:[category]},{
        where:{borrowerId:req.session.userId}
      })
      .then(bookData=> {
        console.log(bookData)
        const data = bookData.map(book=>book.toJSON());
        res.render("currentbook", {
        userdate:data,
        session:req.session})
      })
  });

// Route to unborrow the book that the user is borrowing.
  router.put("/currentuser/book/remove", (req, res) => {
    book.update({borrowerId:null},
        {
        where:{borrowerId:req.session.userId}
      })
      .then(bookData=> {
        res.render("currentbook", {
        session:req.session})
      })
  });


module.exports = router;