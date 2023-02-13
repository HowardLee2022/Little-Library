const sequelize = require("../config/connection")
const {user,category} = require("../models")

const seed = async ()=>{
    await sequelize.sync({force:true});
    const users = await user.bulkCreate([
        {
            username:"nguyet11",
            email:"thien@thien.com",
            password:"password"
        },
        {
            username:"howard22",
            email:"howard@howard.com",
            password:"password"
        },
        {
            username:"evan33",
            email:"howard@howard.com",
            password:"password"
        },
    ],{
        individualHooks:true
    })

    const categories = await category.bulkCreate([
        {
            categoryname:"Horror"
        },
        {
            categoryname:"Science Fiction"
        },
        {
            categoryname:"Fantasy"
        },
        {
            categoryname:"Comedy"
        },
        {
            categoryname:"Adventure Story"
        }
        
    ])
    process.exit(1) 
}

seed();
