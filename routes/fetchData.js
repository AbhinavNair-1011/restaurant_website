const express=require("express");
const router=express.Router();
const controller=require("../controllers/fetchDataController")

router.get("/api/get-data",controller.fetchData)

module.exports=router;