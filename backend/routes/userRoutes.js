import express from "express";
import { adminLogin, getAllUsers, loginUser, registerUser } from "../controllers/userController.js";
import adminAuth from "../middleware/adminAuth.js";

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin-login', adminLogin)
userRouter.get('/all-users', adminAuth, getAllUsers)

export default userRouter