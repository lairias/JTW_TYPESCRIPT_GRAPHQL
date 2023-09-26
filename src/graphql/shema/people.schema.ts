import {gql} from "apollo-server-express"
import db from '../../../models';

export const typeDefs = gql`
 type pe_people {
  cod_people: ID,
  cod_user: ID,
  firstName: String,
  middleName: String,
  lastName: String,
  _token: String,
  photoProfile: String,
  photoBackground: String,
  gender: String,
  age: Int,
  birthDate: String,
  createdAtPeople: String,
  updatedAtPeople: String,
}
type Query {
    GetAllPeople:[pe_people]
    GetPeople(cod_people : ID!) : pe_people
}
`
export const resolvers = {
  Query:{
    GetAllPeople: async() => {
      const people = await db.pe_people.findAll(
      );
      return people;
    },
    GetPeople: async(parent:any, args:any, contextValue:any, info:any) => {
      const people = await db.pe_people.findByPk(args.cod_people
      );
      return people;
    }
  }
}