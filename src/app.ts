import express,{Application} from 'express';
import {ApolloServer} from 'apollo-server-express';
import {typeDefs,resolvers} from '../src/graphql/shema/index'
import db from '../config/index';
import  Usuairo_R from './router/user.router';
import "dotenv/config"
class Servidor {
  private app: Application;
  private server : any;
  private port: string;
  private apiRouter = {
    usuarios: "/api/usuarios",
    inicio: "/"
  }
  
  constructor() {
    this.app = express();
    this.port = process.env.PORT || '4000';
    this.server = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({req}) => ({req})
    });
    this.ApolloServer();
    this.ConeccionBase();
    this.Middleware();
    this.Router();
  }
  Middleware(){
    this.app.use(express.json());

  }
  Router(){
    this.app.use(this.apiRouter.usuarios,Usuairo_R
    );
  }
  
  async ApolloServer(){
    await  this.server.start().then(()=>{
      console.log(`server is running on ${this.server.graphqlPath}`);
    });
    await this.server.applyMiddleware({app:this.app});
  }
  async ConeccionBase(){
    await db.authenticate();
    console.log('Connection has been established successfully.');
  }
  Listen(){
        
    this.app.listen(this.port, () => {
      console.log('Server on port', this.port);
    });
  }
}

export default Servidor;