const Sequelize=require("sequelize");
const sequelize =require("../database/databaseConnection");

const tableOrders=sequelize.define("table_orders",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    table1:{
        type:Sequelize.STRING,
    },
    table2:{
        type:Sequelize.STRING,
    },
    table3:{
        type:Sequelize.STRING,
    },
    table4:{
        type:Sequelize.STRING,
    },
    
})

class Data{
    constructor(tableNo,itemName){
        this.tableNo=tableNo;
        this.itemName=itemName;
    }
    insertIntoDatabase(){
        console.log("running")
        if(this.tableNo==1){
            for(let each of this.itemName ){
                console.log(each)
                tableOrders.create({
                    table1:each
                     })
                     .catch(err=>console.log(err))
            }
        }
     else if(this.tableNo==2){
        for(let each of this.itemName ){
           tableOrders.create({
                table2:each
                 })
                 .catch(err=>console.log(err))
        }
    }
    else if(this.tableNo==3){
        for(let each of this.itemName ){
             tableOrders.create({
                table3:each
                 })
                 .catch(err=>console.log(err))
        }
    }
    else if(this.tableNo==4){
        for(let each of this.itemName ){
           tableOrders.create({
                table4:each
                 })
                 .catch(err=>console.log(err))
        }
       
    }
    }

    static deleteFromDatabase(tableName,itemName){
        if(tableName=="table1"){
            return tableOrders.findOne({where:{
                table1:itemName,
                
            }
        }).then(result=>{
               if(result){
                    return result.destroy()
               }
                  
                })
                .catch(err=>{
                    console.log(err)
                })
          }else  if(tableName=="table2"){
            return tableOrders.findOne({where:{
                table2:itemName,
                
            }
        })
            .then(result=>{
                if(result){
                    return result.destroy()
               }
            })
          }else  if(tableName=="table3"){
            return tableOrders.findOne({where:{
                table3:itemName,
                
            }
        })
            .then(result=>{
                if(result){
                    return result.destroy()
               }
            })
          }else  if(tableName=="table4"){
            return tableOrders.findOne({where:{
                table4:itemName,
                
            }
        })
            .then(result=>{
                if(result){
                    return result.destroy()
               }
            })
          }


      
    }

    static fetchAll(){
        return tableOrders.findAll()
    }
    

}
module.exports=Data;
