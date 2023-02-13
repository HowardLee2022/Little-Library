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
    book.create( req.body
    //     {
    //     bookname:req.body.bookname,
    //     author:req.body.author,
    //     fiction:req.body.fiction,
    //     // categoryId:req.body.categoryId,
    //     // userId:req.body.userId
    //     //userId:req.session.userId
    // }
    
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
    book.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(bookData=>{
        res.json(bookData)
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