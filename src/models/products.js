import mongoose, { Mongoose } from "mongoose";
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number
    }
})

export default mongoose.model('product', productSchema)



