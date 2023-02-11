const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class category extends Model {}

category.init({
    categoryname:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            len:[1]
        }   
    },
    fiction: {
         type: DataTypes.BOOLEAN,
         defaultValue:true
    },
    // bookId:{
    //     type: DataTypes.INTEGER,
    //      allowNull:false,
    //      validate:{
    //         len:[1]
    //     }  
    // },
},{
    sequelize,
});

module.exports=category