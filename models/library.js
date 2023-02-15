const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class library extends Model {}

library.init({
    availability: {
         type: DataTypes.BOOLEAN,
         defaultValue:true
    },
},{
    sequelize,
});

module.exports=library