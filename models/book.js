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
    fiction: {
        type: DataTypes.BOOLEAN,
        defaultValue:true
   }
    // categorytype:{
    //     type: DataTypes.STRING,
    //      allowNull:false,
    //      validate:{
    //         len:[1]
    //     }  
    // },
    // userId:{
    //     type: DataTypes.INTEGER,
    //      allowNull:false,
    //      validate:{
    //         len:[1]
    //     }  
    // },
},{
    sequelize,
});

module.exports=book