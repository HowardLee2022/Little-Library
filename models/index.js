const book = require("./book");
const user = require("./user");
const categories = require("./categories");
const library = require("./library");


book.belongsTo(user,{
    onDelete:"CASCADE"
});
user.hasMany(book)

book.belongsTo(library,{
    onDelete:"CASCADE"
});
library.hasMany(book)

library.belongsTo(user,{
    onDelete:"CASCADE"
})
library.hasMany(user);

book.belongsTo(categories,{
    onDelete:"CASCADE"
});
categories.hasMany(book)




module.exports ={
    book,
    user,
    categories,
    library
}