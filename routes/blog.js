//in this import controller then do mapping
//to create a route , use router , jo ki express se milega
const express=require("express");
const router=express.Router();

//3 interactions- post,likes,comment   
// so build 3 controllers

//IMPORT Controller
const{dummyLink,likePost, unlikePost}=require("../controllers/likeController");
const {createComment}=require("../controllers/commentController");
const {createPost,getAllPosts}=require("../controllers/postController");

//Create Mapping of controller to routes

// router.get("/dummyroute",dummyLink);
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

//export 
module.exports=router;