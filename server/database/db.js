import mongoose from 'mongoose';

const URL="mongodb+srv://Dev:devpatel1204@shoppingcart.6oxdh.mongodb.net/SHOPPINGCART?retryWrites=true&w=majority";
const connection=async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@shoppingcart.6oxdh.mongodb.net/SHOPPINGCART?retryWrites=true&w=majority`;
        console.log("dev");
        try
        {
                await mongoose.connect(URL,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});
                console.log("database connected successfully");
        }
        catch(error)
        {
            console.log("error is:",error);
        }
}
export default connection;