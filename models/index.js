const book = require("./book");
const user = require("./user");
const category = require("./category");
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