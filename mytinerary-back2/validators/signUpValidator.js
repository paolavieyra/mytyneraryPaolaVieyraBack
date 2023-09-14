import joi from "joi";
import joiPwd from "joi-password-complexity";

const complexityOptions = {
    min: 4,
    max: 250,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
  };

export const signUpSchema = joi.object({
    mail: joi.string().email().required().messages({
        "string.empty":"The email should not be empty",
        "any.required": "The email field is required",
        "string.email": "The email should have @ and .com"
    }),
    password: joiPwd( complexityOptions ),
    name: joi.string().required().min(3).max(20).messages({
        "string.min": "The minimum number of characters for a name is 3"
    }), 
    photo: joi.string().uri(),    
    birth_date: joi.date().max(Date.now()),
    age: joi.number(),
    phono: joi.number(),
    verified: joi.boolean(),
})