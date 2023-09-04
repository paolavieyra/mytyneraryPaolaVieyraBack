import { model,Schema, Types } from "mongoose";

let collection = "itineraries"
let schema = new Schema({
    title: { type:String,required:true },
    photo: { type:String,required:true },
    city_id: { type:Types.ObjectId,required:true,ref:'cities' },
    author: { type:String,required:true },
    authorPhoto: { type:String,required:true },
    price: { type:Number ,required:true,min:1,max:5},
    duration: { type:Number ,required:true},
    likes: { type:Number ,default:0},   
    hashtags: [String]      
    
},{
    timestamps: true
})
let Itinerary = model(collection, schema)
export default Itinerary