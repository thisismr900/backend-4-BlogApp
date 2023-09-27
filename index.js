const express=require("express");//npm i express
//express framework ka instance le liya
const app=express();//server ka instance bana liya

require("dotenv").config();//process object ke andar dot env load ho gyi
const PORT=process.env.PORT || 3000;

//middleware
app.use(express.json()); //to parse json

//import route
const blog=require("./routes/blog");
//mount 
app.use("/api/v1",blog);

const connectWithDb=require("./config/database");
connectWithDb();

//activate server
app.listen(PORT,()=>{ 
    console.log(`App is started at ${PORT}`);
})

//default route
app.get("/",(req,res)=>{
    res.send(`<h3>At Home Page</h3>`)
})