//npm i mongoose
const mongoose=require("mongoose");//mongoose ka instance le ayo

require("dotenv").config();//process object ke andar dotenv ka content load hoga

const connectWithDb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("Db connected successfully"))
    .catch((error)=>{
        console.error("Db facing Connection Issues");
        console.log(error);
        process.exit(1);//abnormal termination
    })
}

module.exports= connectWithDb; 