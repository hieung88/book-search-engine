const typeDefs = `
    type Book {
        authors: [String]
        description: String!
        bookId: ID! 
        image: String
        link: String
        title: String! 
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Query {
        book: [Book]
        user: [User]
    }



    type Mutation {
        addUser(name: String!, email: String!, password: String!, username: String!): User
        login(email: String!, password: String!): User        
    }
`;

module.exports = typeDefs;



