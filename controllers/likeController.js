// exports.dummyLink=(req,res)=>{
//     res.send("Dummy Page")
// };

//import Models
const Post=require("../models/postModel");
const Like=require("../models/likeModel");


//Logic to like a post : 
// 1.  fetch Data from req . body -> create a like object -> save 
// 2.  saved ki hui like object ki id nikalo->using $push, post collection mein insert

exports.likePost=async (req,res)=>{
    try{
        const {post,user}=req.body;//fetch data
        const like= new Like({   //create a new like object
            post,user
        });
        const savedLike=await like.save(); //save in db 

        //update post collection for this new liked object
        const updatedPost=await Post.findByIdAndUpdate(
            post,
            {$push:{likes: savedLike._id} },
            {new: true});

        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error:"Error while Liking a post",
        })
    }
}




//Unlike a post

//logic:
//1. delete the liked object from like model
//2. Update the deleted like id from post model

exports.unlikePost=async(req,res)=>{
    try{
        const {post,like}=req.body;
        //find and delete from like collection
        const deletedLike=await Like.findOneAndDelete({post:post,_id:like});

        //update post collection
        const updatedPost=await Post.findByIdAndUpdate(post,
                                                    {$pull:{likes:deletedLike._id}},
                                                    {new:true} );

        res.json({
            post:updatedPost
        })


    }
    catch(error){
        return res.status(500).json({
            error:"Error while Unliking a post",
        })
    }
}