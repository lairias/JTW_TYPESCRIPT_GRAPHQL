import {gql} from "apollo-server-express"
import db from '../../../models';

export const typeDefs = gql`
 type pro_product {
  cod_product: ID,
  cod_category: ID,
  hash_product: String,
  view_product: String,
  nam_product: String,
  price_product: Float,
  cod_label_product: [String],
  ins_product: String,
  size_product: [String],
  des_product: String,
  stock_product: String,
  updatedAtPhotoProduct: String,
  createdAtPhotoProduct: String,
}

type Query {
    GetAllProduct:[pro_product]
}
`;

export const resolvers = {
  Query:{
    GetAllProduct: async() => {
      const product = await db.pro_products.findAll(
      );
      return product;
    },
  }
}