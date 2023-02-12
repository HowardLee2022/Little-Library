const express=require('express');
const router = express.Router();

const userRoutes = require('./userController');
router.use("/api/user",userRoutes);

const bookRoutes = require('./bookController');
router.use("/api/book",bookRoutes);

const categoryRoutes = require('./categoryController');
router.use("/api/category",categoryRoutes);

const libraryRoutes = require('./libraryController');
router.use("/api/library",libraryRoutes);





 
















module.exports = router;