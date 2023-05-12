const Data=require("../models/data")

module.exports.deleteData=(req,res,next)=>{
    console.log("requesteddddddddddd")
    Data.deleteFromDatabase(req.params.tableName,req.params.itemName)
   return res.json({
        status:"successfull"
    })
}