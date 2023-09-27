// for schema , import mongoose
const mongoose=require("mongoose")

//like konsi post par kiya h,   kisne kiya hai 

//route handler
const likeSchema=new mongoose.Schema({
     post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" //refer to post model that is being liked
     },
     user:{   //kisne like kari post ko
        type:String,
        required:true
     }
});


//export
module.exports=mongoose.model("Like",likeSchema);
