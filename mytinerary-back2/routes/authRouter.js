import { Router } from "express";
import authController from "../controllers/authController.js";
import { signUpSchema } from "../validators/signUpValidator.js";
import { signInSchema } from "../validators/signInValidator.js";
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";





const authRouter = Router()
const { signUp } = authController
const { signIn } = authController
const { loginWithToken } = authController

//auth.get('/',)
//auth.get('/:id',)

authRouter.post('/signUp', validator(signUpSchema), signUp)
authRouter.post('/signIn', validator (signInSchema), signIn)
authRouter.get('/signIn/token',passport.authenticate( 'jwt',{session:false} ), loginWithToken)
//auth.put('/:id')
//auth.delete('/:id')

export default authRouter