const book = require("./book");
const user = require("./user");
const category = require("./category");
const library = require("./library");


book.belongsTo(user,{
    onDelete:"CASCADE"
});
user.hasMany(book)

book.belongsTo(category,{
    onDelete:"CASCADE"
});

category.hasMany(book)


library.belongsTo(book)

library.belongsTo(user)

// book.belongsTo(library)

// library.hasMany(book,{
//     onDelete:"CASCADE"
// });



// user.belongsTo(library)


// library.hasMany(user,{
//     onDelete:"CASCADE"
// });

// library.hasMany(user)



module.exports ={
    book,
    user,
    category,
    library
}