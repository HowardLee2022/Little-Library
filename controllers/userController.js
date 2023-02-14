const express=require('express');
const router = express.Router();
const {user, book} = require('../models');
const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
    user.findAll().then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with user routes!",err})
    })
})

//Creating users
// router.post("/",(req,res)=>{
//     console.log(req.body)
//     user.create({
//         username:req.body.username,
//         email:req.body.email,
//         password:req.body.password
//     }).then(userData=>{
//         res.json(userData)
//     }).catch(err=>{
//         console.log(err);
//         res.status(500).json({msg:"Error with creating user!",err})
//     })
// })

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

// Find book and users 
router.get("/:id",(req,res)=>{
    user.findByPk(req.params.id,{
        include:[book]
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error with getting user and associated books",err})
    })
})

// Uodate a user
router.put("/:id",(req,res)=>{
    user.update(req.body,{
        where:{
            id:req.params.id
        }
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Cannot edit user",err})
    })
});

// Delete a user
router.delete("/:id",(req,res)=>{
    user.destroy({
        where:{
            id:req.params.id
        }
    }).then(userData=>{
        res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Oh no, cannot delete user",err})
    })
});

// create user and then login (save for later)
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
// login to seesion(save for later)
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






  
//  router.get("/book", (req, res) => {
//     book
//       .findAll({
//         where: { borrowerId:session.userId },
//       })
//       .then(bookData=> {
//         const data = bookData.map(book=>book.toJSON());
//         res.render("currentbook", {
//         userdate:data,
//         session:req.session})
//       })
//   });

  
  
// router.get("/book", (req, res) => {
//         book
//           .findAll({
//             include: [
//               {
//                 model: user,
//                 as: "owner",
//               },
//               {
//                 model: user,
//                 as: "borrower",
//               },
//             ],
//             where: { ownerId: 1 },
//           })
//           .then(bookData=> {
//             console.log(bookData)
//             const data = bookData.map(book=>book.toJSON());
//             res.render("currentbook", {
//             userdate:data,
//             session:req.session})
//           })
//       });
    


 









module.exports = router;