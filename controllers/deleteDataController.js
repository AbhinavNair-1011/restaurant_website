const Data=require("../models/data")

module.exports.deleteData=(req,res,next)=>{
    console.log(req.params)
    Data.deleteFromDatabase(req.params.tableName,req.params.itemName)
}