"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
type pe_people {
  cod_people: ID,
  cod_user: ID,
  firstName: String,
  middleName: String,
  lastName: String,
  photoProfile: String,
  photoBackground: String,
}
type User {
  cod_user : ID,
  email: String,
  email_recovery: String,
  userName: String,
  pe_people: [pe_people],
}
  type Query {
    hello: String
    GetAllUser: [User]
  }
`;
exports.default = typeDefs;
