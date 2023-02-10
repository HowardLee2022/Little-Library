const express=require('express');
const router = express.Router();

const userRoutes = require('./userController');
router.use("/api/users",userRoutes);

const bookRoutes = require('./bookController');
router.use("/api/books",bookRoutes);



























module.exports = router;