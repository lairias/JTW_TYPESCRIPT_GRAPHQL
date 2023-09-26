import {gql} from "apollo-server-express"
import db from '../../../models';
import JWT from 'jsonwebtoken'
import {compararPassword, encrptPassword} from "../../helpers/bycrypt"
export const typeDefs = gql`
  type User {
  cod_user: ID,
  email: String,
  email_recovery: String,
  userName: String,
  password:String,
  verifiedEmail:Boolean,
  ind_usr:Boolean,
  ins_usr:Boolean,
  token: String
}
  type RegisterUser {
  email: String,
  email_recovery: String,
  userName: String,
  password:String,
  token: String
  cod_user: ID,
  firstName: String,
  middleName: String,
  lastName: String,
  photoProfile: String,
  photoBackground: String,
  gender: String,
  age: Int,
  birthDate: String,
}


type Mutation  {
  LoginUser(mail: String! ,password: String! ) : User
  
  RegisterUser(mail: String,email_recovery: String,
  userName: String,  password:String) : RegisterUser
}
`
export const resolvers = {
  Mutation:{
    LoginUser: async(_:any,args:any,) => {
      try{
        const user = await db.pe_users.findOne({where:{email:args.mail}});
        if(!user) throw new Error("Invalid username");
        console.log([args.password, user.password])
        if (!(await compararPassword(args.password, user.password))) throw new Error ("invalid password")
        user.token = await JWT.sign({ _id: user.COD_USER }, process.env.JWTSECRET);
        return user
      }catch(error: any){
        throw new Error(error)
      }
      encrptPassword
    },
    RegisterUser: async(_:any,args:any,) => {
      try{
        const NewUser = await db.pe_users.create({ 
          email: args.mail,
          email_recovery: args.email_recovery,
          userName: args.userName,
          password:  await encrptPassword(args.password),
        });

        return NewUser
      }catch(error: any){
        throw new Error(error)
      }

    }
  }
}