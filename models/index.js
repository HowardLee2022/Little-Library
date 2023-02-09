const book = require("./book");
const user = require("./user");
const categories = require("./categories");
const library = require("./library");


book.belongsTo(user);
library.hasMany(book);
library.hasMany(user);
book.hasMany(categories);



module.exports ={
    book,
    user,
    categories,
    library
}