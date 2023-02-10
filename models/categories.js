const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class categories extends Model {}

categories.init({
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
},{
    sequelize,
});

module.exports=categories