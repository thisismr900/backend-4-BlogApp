// for schema , import mongoose
const mongoose=require("mongoose")


//route handler
const postSchema=new mongoose.Schema({
    title:{ //title of post
        type:String,
        required:true
    },
    body:{ //content of post
        type:String,
        required:true
    },
    likes:[{    //post liked by whom 
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }],
    comments:[{ //post commented by whom
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]

});


//export
module.exports=mongoose.model("Post",postSchema);
