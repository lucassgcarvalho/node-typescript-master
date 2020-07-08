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
exports.MongoDb = void 0;
const mongodb_1 = __importDefault(require("mongodb"));
let MongoClient = mongodb_1.default.MongoClient;
class MongoDb {
    constructor(uriParam) {
        /**
         * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
         * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
         * mongodb+srv://matrix:neoisalive@<your-cluster-url>/test?retryWrites=true&w=majority
         */
        //uri: string = "mongodb+srv://matrix:neoisalive@cluster0.k58hy.mongodb.net/matrix?retryWrites=true&w=majority";
        this.uri = "mongodb://localhost:27017/matrix";
        this.conf(uriParam).then((db) => { this.dataBase = db; }, (err) => { throw err; });
    }
    getDataBase() {
        return this.dataBase;
    }
    listDatabases(client) {
        return __awaiter(this, void 0, void 0, function* () {
            let databasesList = yield client.db().admin().listDatabases();
            console.log("Databases:");
            databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
        });
    }
    ;
    conf(uriParam) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.client = yield MongoClient.connect((uriParam ? uriParam : this.uri), { useNewUrlParser: true, useUnifiedTopology: true });
                this.listDatabases(this.client);
                return this.dataBase = this.client.db();
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
}
exports.MongoDb = MongoDb;
MongoDb.ObjectId = mongodb_1.default.ObjectId;
//# sourceMappingURL=mongodb.config.js.map