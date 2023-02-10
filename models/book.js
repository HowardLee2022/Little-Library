const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class book extends Model {}

book.init({
    bookname:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1]
        }   
    },
    author: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
            len:[1]
        }   
    }
    // ,
    // genre:{
    //     type:DataTypes.INTEGER,
    // },
    // owner:{
    //     type:DataTypes.INTEGER,
    //     allowNull:false
    // }
},{
    sequelize,
});

module.exports=book