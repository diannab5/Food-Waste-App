const { User } = require('./../models/models');
const jwt = require("jsonwebtoken");
const user = {
    create: async(user) => {
        try {
            const result = await User.create(user);
            return result;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    login: async(password, email) => {
        try {
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (user) {
                if (user.password == password) {
                    let token = jwt.sign(user.dataValues, 'foodwaste', {
                        expiresIn: 1500
                    })
                    return token;
                }
            }
        } catch (err) {
            throw new Error(err.message)
        }
    },
    getAll: async() => {
        try {
            const users = await User.findAll();
            return users;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    getOne: async(email) => {
        try {
            const user = await User.findAll({
                where: {
                    email: email
                }
            });
            return user;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    updateOne: async (email, user) => {
        try {
            const newUser = await User.update({
                firstName: user.firstName,
                lastName: user.lastName,
                password: user.password,
                city: user.city,
                phoneNumber: user.phoneNumber,
            },
                {
                    where: {
                        email: email
                    }
                })
            return newUser;
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

module.exports = user;
