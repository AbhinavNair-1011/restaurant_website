const Data=require("../models/data")

module.exports.addData=(req,res,next)=>{
 console.log(req.body);
  let order=new Data(req.body.tableNo,req.body.itemName);
  order.insertIntoDatabase()

}