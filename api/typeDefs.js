import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    currentUser: User
  }

  type Mutation {
    logout: Boolean,
    login(email: String!, password: String!): AuthPayload,
    signup(firstName: String!, lastName: String!, email: String!, password: String!): AuthPayload
  }

  type AuthPayload {
    user: User
  }
`;

export default typeDefs;