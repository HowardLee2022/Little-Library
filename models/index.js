const book = require("./book");
const user = require("./user");
const category = require("./category");
const library = require("./library");




book.belongsTo(user,{
    onDelete:"CASCADE",
    as:'owner',
    foreignKey: {
        allowNull: false
    }
});

book.belongsTo(user,{
    onDelete:"CASCADE",
    as:'borrower'
});




book.belongsTo(category,{
    onDelete:"CASCADE"
});


category.hasMany(book)





module.exports ={
    book,
    user,
    category,
    library
}