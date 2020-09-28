const Sequelize = require("sequelize");
const sequelize = new Sequelize('c9','root','p@ss',{
    dialect:'mysql'
});

sequelize.authenticate().then(() => {
    console.log('Database connection success!');
}).catch(err => {
    console.log(`Database connection error: ${err}`);
});

class Product extends Sequelize.Model { };

Product.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productStatus: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expirationDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    producer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    claimedBy: {
        type: Sequelize.STRING
    }
}, {
    sequelize,
    modelName: 'products'
});



class User extends Sequelize.Model { };

User.init({
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
   
}, {
    sequelize,
    modelName: 'users'
});

sequelize.sync({force: true});

User.hasMany(Product);
Product.belongsTo(User);

module.exports={
    sequelize,
    User,
    Product,
}




