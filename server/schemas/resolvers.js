const { Book, User } = require('../models');

const resolvers = {
    Query: {
        book: async () => {
            return Book.find({});
        },
        user: async () => {
            return User.find({});
        },
    


    },
    Mutation: {
        addUser:  async (parent, { name, email, password, username }) => {
            const user = await User.create({name, email, password, username});
            return user;
        }

    }
};

module.exports = resolvers;
