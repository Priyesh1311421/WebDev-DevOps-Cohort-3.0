const  express = require ("express")
const mongoose = require("mongoose")

const { userRouter } = require("./routes/user")
const {  courseRouter } = require("./routes/course")
const { adminRouter } = require("./routes/admin")

const app = express();

app.use("/user", userRouter)        //yaha prefix daal diye ki "/user" se jo bhi req ayega woh userRouter ke pass jyega 
app.use("/course", courseRouter)    //same here router ke prefix ko pehle hi define kr diye hai
app.use("/admin", adminRouter)

async function main(){              //yeh func isliye bnaye kyuki like aise bhi ho skta hai ki bina database connct hue hi server start ho jaye isliye ek async main func bnaye jispe phle database connect hoga uske bd server 3000 pe shuru hoga 
    await mongoose.connect("mongodb+srv://admin:rohandev123@cluster0.wm8zj.mongodb.net/course-selling-app")
    app.listen(3000);       

}

main();

