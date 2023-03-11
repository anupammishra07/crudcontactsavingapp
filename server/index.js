const app =require("./app");
const  connectWithDb = require("./config/db")
connectWithDb()

app.listen(8000, ()=>{
    console.log(`app is running on 8000 port`)
})