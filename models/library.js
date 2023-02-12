const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class library extends Model {}

library.init({
    book:{
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    availability: {
         type: DataTypes.BOOLEAN,
         defaultValue:true
    },
    borrowby:{
        type:DataTypes.INTEGER,
    }
},{
    sequelize,
});

module.exports=library