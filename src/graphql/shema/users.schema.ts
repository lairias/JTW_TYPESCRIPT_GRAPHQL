import {gql} from "apollo-server-express"
import db from '../../../models';

export const typeDefs = gql`
 type User {
  cod_user : ID,
  email: String,
  email_recovery: String,
  userName: String,
  password:String,
  verifiedEmail:Boolean,
  ind_usr:Boolean,
  ins_usr:Boolean,
  updatedAtUser:String,
  createdAtUser:String
}
type Query{
  GetAllUser:[User]
}
`
export const resolvers = {
  Query:{
    GetAllUser: async() => {
      const users = await db.pe_users.findAll(
      );
      return users;
    }
  }
}