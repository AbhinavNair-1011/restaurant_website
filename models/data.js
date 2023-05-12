const Sequelize=require("sequelize");
const sequelize =require("../database/databaseConnection");

const tableOrders=sequelize.define("table_orders",{
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
        if(this.tableNo===1){
            for(let each of this.itemName ){
                 tableOrders.create({
                    table1:each
                     })
                     .catch(err=>console.log(err))
            }
        }
     else if(this.tableNo===2){
        for(let each of this.itemName ){
           tableOrders.create({
                table2:each
                 })
                 .catch(err=>console.log(err))
        }
    }
    else if(this.tableNo===3){
        for(let each of this.itemName ){
             tableOrders.create({
                table3:each
                 })
                 .catch(err=>console.log(err))
        }
    }
    else if(this.tableNo===4){
        for(let each of this.itemName ){
             tableOrders.create({
                table4:each
                 })
                 .catch(err=>console.log(err))
        }
       
    }
    }

    static deleteFromDatabase(tableName,itemName){
        // console.log(tableName,itemName)
        if(tableName=="Table 1 Orders"){
            tableOrders.findOne({where:{
                table1:itemName,
                
            },
            attributes:["table1"]
        })
                .then(result=>{
                
                    result.destroy()
                })
          }else  if(tableName=="Table 2 Orders"){
            tableOrders.findOne({where:{
                table2:itemName,
                
            },
            attributes:["table2"]
        })
            .then(result=>{
                result.destroy()
            })
          }else  if(tableName=="Table 3 Orders"){
            tableOrders.findOne({where:{
                table3:itemName,
                
            },
            attributes:["table3"]
        })
            .then(result=>{
                result.destroy()
            })
          }else  if(tableName=="Table 4 Orders"){
            tableOrders.findOne({where:{
                table4:itemName,
                
            },
            attributes:["table4"]
        })
            .then(result=>{
                result.destroy()
            })
          }


      
    }
    

}
module.exports=Data;
