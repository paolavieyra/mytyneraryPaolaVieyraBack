import { model,Schema, Types } from "mongoose";

let collection = "cities"
let schema = new Schema({
    country: { type:String,required:true },
    creationDate: { type:Date, required:true },
    population: { type:Number },
    photo: { type:String,required:true },
    city: { type:String,required:true },        
    featuredLocation: { type:String,default:"edit later" },
    officialLanguage: { type:String,required:true },
    officialReligión: { type:String,required:true },
    goverment: { type:String,required:true },
    currency: { type:String,required:true },
    admin_id: { type:Types.ObjectId,required:true,ref:'user'  }
    //para relacionar datos en mongo es necesario refenciar el dato hacia la coleccion que necesito relacionar  
},{
    timestamps: true
})
//estoy parado en el modelo City de la coleccion cities 
//y necesito relacionar la propiedad admin_id con la coleccion users
//esto lo logro referenciando con la propiedad ref:'nombreDeLaColeccionAReferenciarse
let City = model(collection, schema)
export default City