const express=require('express');
const router = express.Router();
const {user, book, category, library} = require('../models');

// router.get("/",(req,res)=>{
//     book.findAll().then(bookData=>{
//         res.json(bookData)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"Error with user routes!",err})
//     })
// })
//Creating book


router.post("/",(req,res)=>{
    console.log(req.body)
    if(!req.session.userId){
        return res.status(403).json({msg:"login first post"})
     };
    book.create(
        {
        bookname:req.body.bookname,
        author:req.body.author,
        fiction:req.body.fiction,
        categoryId:req.body.categoryId,
        ownerId:req.session.userId
    }
    
    ).then(bookData=>{
        console.log(bookData);
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with creating book!",err})
    })
})

router.get("/upload",(req,res)=>{
    res.render("upload",{
        session:req.session})
})


// Find book with owner attach
router.get("/:id",(req,res)=>{
    book.findByPk(req.params.id,{
        include:[user]
    }).then(bookData=>{
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with getting book and associated owner",err})
    })
})

// Uodate a book
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

// Delete a book
router.delete("/:id",(req,res)=>{
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


router.get("/",(req,res)=>{
    book.findAll(
        {include: [{
            model: user,
            as: 'owner'
        },{
            model: user,
            as: 'borrower'
        },{
            model: category
        }]}).then(bookData=>{
        res.json(bookData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with user routes!",err})
    })
})



  
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


  router.get("/currentuser/book", (req, res) => {
    book
      .findAll({
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

  router.put("/currentuser/book/remove", (req, res) => {
    book
      .update({borrowerId:null},
        {
        where:{borrowerId:req.session.userId}
      })
      .then(bookData=> {
        res.render("currentbook", {
        session:req.session})
      })
  });



  router.get("/book/own",(req,res)=>{
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

// router.get("/",(req,res)=>{
//     book.findAll(
//         {include: [{
//             model: user,
//             as: 'owner'
//         },{
//             model: user,
//             as: 'borrower'
//         }]}).then(bookData=>{
//         res.json(bookData)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"Error with user routes!",err})
//     })
// })









module.exports = router;