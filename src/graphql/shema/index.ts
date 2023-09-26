import {gql} from "apollo-server-express"
import { typeDefs as DefsPeople,resolvers as ResolverPeople } from "./people.schema";
import { typeDefs as DefsUser,resolvers as ResolverUser } from "./users.schema";
import { typeDefs as DefsProduct,resolvers as ResolverProduct } from "./product.schema";
import { typeDefs as DefsAuth,resolvers as ResolverAuth } from "./auth.shema";

const rootTypeDefs = gql`
   type Query {
    _:String
  },
`;
export const resolvers = [
  ResolverPeople,
  ResolverUser,
  ResolverProduct,
  ResolverAuth]

export  const typeDefs = [
  rootTypeDefs,
  DefsAuth,
  DefsPeople,
  DefsUser,
  DefsProduct,
]