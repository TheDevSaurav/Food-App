import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://prajapatisaurav570:saurav123@cluster0.cqgfdtp.mongodb.net/FOOD-APP').then(()=>console.log("DB Connected"));
   
}


