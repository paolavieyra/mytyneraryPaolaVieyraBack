
import mongoose from "mongoose";
import { Schema, model } from "mongoose";


const userSchema = Schema({
    mail:{ type: String, required:true },
    password:{ type: String, required:true },
    name:{ type: String },   
    photo:{ type: String, default:"https://www.pngall.com/wp-content/uploads/5/Profile-Avatar.png"},   
    birth_date:{type: Date},
    age:{type: Number},   
    phone: { type: Number } ,
    verified: { type: Boolean, default: false },
   
},{
    timestamps: true
})
const User = mongoose.model('user', userSchema)

export default User









//creamos el espaio virtual donde se va a guardar todos los documentos/modelos

// let collection = 'users'       // se pone en plural y minuscula'users' 'cities' etc.

// //definimos el schema de datos del modelo
// let schema = new Schema({
//     name:{ type:String,required:true },  //por default todos los datos son opcionales
//     lastName:{ type:String },            //lo dejo asi si es opcional
//     mail:{ type:String,required:true,unique:true },  //unique en true hace que el mail sea unico
//     photo:{ type:String,default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg"}, // deafault hace al parametro opcional, si el cliente provee foto, la usa si no usa la que por default le asignamos
//     password:{ type:String,required:true },
//     country:{ type:String,required:true }
// })

// //para crear un modlo de datos uo el metodo model
// //pasando como parametro donde tengo que crear el documento y con que forma
// let User = model(collection,schema)

// export default User