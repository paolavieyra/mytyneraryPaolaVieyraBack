import joi from "joi";
import  JoiPwd  from "joi-password-complexity";
const complexityOptions = {
    min: 4,
    max: 250,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
  };
  export const signInSchema = joi.object({
    mail: joi.string().email().required().messages({
        "string.empty":"The email should not be empty",
        "any.required": "The email field is required",
        "string.email": "The email should have @ and .com"
    }),
    password: JoiPwd(complexityOptions).messages({

    })
})