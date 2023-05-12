const express=require("express");
const router=express.Router();
const controller=require("../controllers/deleteDataController")

router.delete("/api/delete-data/:tableName/:itemName",controller.deleteData)
module.exports=router;