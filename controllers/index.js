const express=require('express');
const router = express.Router();

const userRoutes = require('./userController');
router.use("/api/user",userRoutes);

const bookRoutes = require('./bookController');
router.use("/api/book",bookRoutes);





 
















module.exports = router;