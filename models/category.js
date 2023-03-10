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
    }
},{
    sequelize,
});

module.exports=category