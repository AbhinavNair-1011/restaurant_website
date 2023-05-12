const Sequelize=require("sequelize").Sequelize;

let sequelize=new Sequelize("restaurant_app","root","Abhinav@1011",{
    dialect:"mysql",
    host:"localhost"
});
module.exports=sequelize;
