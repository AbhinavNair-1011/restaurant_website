const Data=require("../models/data")

module.exports.fetchData=(req,res,next)=>{
    console.log("request received")

    Data.fetchAll()
    .then(result=>{

        console.log(result)
        res.json({
            status:"successfull",
            data:result
        })
    })

}