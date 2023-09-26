"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const book_shema_1 = __importDefault(require("./graphql/shema/book.shema"));
const users_resolvers_1 = __importDefault(require("./graphql/resolvers/users.resolvers"));
const index_1 = __importDefault(require("../config/index"));
const user_router_1 = __importDefault(require("./router/user.router"));
class Servidor {
    constructor() {
        this.apiRouter = {
            usuarios: "/api/usuarios",
            inicio: "/"
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '4000';
        this.server = new apollo_server_express_1.ApolloServer({
            typeDefs: book_shema_1.default,
            resolvers: users_resolvers_1.default,
            context: ({ req }) => ({ req })
        });
        this.ApolloServer();
        this.ConeccionBase();
        this.Middleware();
        this.Router();
    }
    Middleware() {
        this.app.use(express_1.default.json());
    }
    Router() {
        this.app.use(this.apiRouter.usuarios, user_router_1.default);
    }
    ApolloServer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.server.start().then(() => {
                console.log(`server is running on ${this.server.graphqlPath}`);
            });
            yield this.server.applyMiddleware({ app: this.app });
        });
    }
    ConeccionBase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield index_1.default.authenticate();
            console.log('Connection has been established successfully.');
        });
    }
    Listen() {
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        });
    }
}
exports.default = Servidor;
