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
    },
    url: {
        type: DataTypes.STRING,
        allowNull:true
   },
    fiction: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
   }
},{
    sequelize,
});

module.exports=book