const mongoose=require('mongoose')
const colors=require('colors')
const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to Mongodb Database`.bgMagenta.white);
        
    } catch (error) {
        console.log(`mongo connect error`.bgRed.white);
        
        
    }
};
module.exports=connectDB