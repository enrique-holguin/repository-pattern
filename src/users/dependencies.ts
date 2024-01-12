import { UserController } from "./user-controller";
import { UserByIdFinder } from './user-by-id-finder';
import { MongoUserRepository } from "./mongo-user-repository";


const mongoRepository:MongoUserRepository = new MongoUserRepository()
const userByIdFinder: UserByIdFinder = new UserByIdFinder(mongoRepository)
export const userController:UserController = new UserController(userByIdFinder) 