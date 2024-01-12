import { userController } from "./dependencies";
import express from 'express';

const userRouter = express.Router()

userRouter.get('/:id',userController.run.bind(userController))

export {userRouter}