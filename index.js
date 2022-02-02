import express from "express";
import  mongoose  from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
const PORT = 5000;
const DB_URL = `mongodb+srv://<login>:<password>@cluster0.a0sva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`


const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)
// app.use('/users', UserRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('Server!!'))
    } catch (e) {
        console.log(e)
    }
}

startApp()