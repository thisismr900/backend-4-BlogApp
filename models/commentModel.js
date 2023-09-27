// for schema , import mongoose
const mongoose=require("mongoose")

//comment konsi post par kiya h,   kisne kiya hai ,  kya comment kiya hi

//route handler
const commentSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post" //refer to post model that exist
    },
    user:{ //kis user ne comment kari
        type:String,
        required:true
    },
    body:{ //kya comment kari
        type:String,
        required:true
    }
});


//export
module.exports=mongoose.model("Comment",commentSchema);
