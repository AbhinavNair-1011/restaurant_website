const express=require("express");
const app=express();

const cors=require("cors")

const Sequelize=require("sequelize");
const sequelize=require("./database/databaseConnection")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

const addData=require("./routes/addData")
const deleteData=require("./routes/deleteData");
app.use(addData)



app.use(deleteData)

const fetchData=require("./routes/fetchData");
app.use(fetchData)


sequelize.sync()
// .then(result=>console.log(result))
.catch(err=>console.log(err))



app.listen(4000,()=>{
   console.log( "listening to server 3000")
})