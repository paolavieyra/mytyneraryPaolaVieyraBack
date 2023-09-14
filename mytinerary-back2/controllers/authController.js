
import { token } from "morgan";
import User from "../models/User.js"
import bcryptjs from 'bcryptjs'
import  jwt  from "jsonwebtoken";

const authController = {

    signUp: async (req, res, next) => {
        try {

            const passwordhash = bcryptjs.hashSync(req.body.password, 10 )
            console.log(passwordhash);
            req.body.password = passwordhash
            const existe = await User.findOne({ mail: req.body.mail })
            if (existe) {
                /*return res.status(400).json({
                    success: false,
                    message: "email already exists"
    
                })*/
               throw new Error('email already exists')
            }
           
            const newUser = await User.create(req.body)
            const token = jwt.sign( { mail:req.body.mail, photo: req.body.photo }, process.env.SECRET_KEY, {expiresIn:'1h'} )

            return res.status(201).json({
                success: true,
                userData: newUser,
                message: 'Sign up successfully'
            })

        } catch (error) {
            console.log(error);
            next(error)

        }


    },
    signIn : async (req, res, next) =>{
       try {
        let { mail:mailBody, password } = req.body
        const userInDB = await User.findOne ( {mail:mailBody} )
        if (!userInDB){
            throw new Error( 'no user exists with this email' )
        }
        let passwordValidated = bcryptjs.compareSync(password, userInDB.password)
        if(!passwordValidated){
            throw new Error( 'The mail/password is incorrect' )
        }
        let { mail, photo, name } = userInDB
        const token = jwt.sign( { mail, photo }, process.env.SECRET_KEY, {expiresIn:'1h'} )
        return res.status(200).json({
            success: true,
            userData: { mail, photo, name },
            token: token,            
            message:'sign in successfully'
        })
        
       } catch (error) {
        console.log(error);
        next(error)
        
       }
    },
    loginWithToken :(req, res) =>{
        console.log(req.user);
        const { mail, photo, name } = req.user
        res.status(200).json({
            success: true,
            userData: { mail, photo, name },
            message: 'sign in successfully',
            body: req.body
        })
    }
}
export default authController;