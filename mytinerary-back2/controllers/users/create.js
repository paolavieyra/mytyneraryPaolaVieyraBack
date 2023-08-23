import User from "../../models/User.js";


  export default async (req,res) => {
    //req es el objeto donde el cliente me manda muchos datos importantes a cerca dxe la peticion
    try{
    let newUser = await User.create(req.body)
    return res.status(201).json({
      success: true,
      message: 'user created',
      response: newUser._id
    })
    }catch(err){
      return res.status(400).json({
        success: false,
        message: 'not created',
        response: null
      })
    }
    }