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
        console.log(tableName,itemName)
        if(tableName=="Table 1 Orders"){
            return tableOrders.findOne({where:{
                table1:itemName,
                
            }
        })
                .then(result=>{
               if(result){
                    return result.destroy()
               }
                  
                })
          }else  if(tableName=="Table 2 Orders"){
            return tableOrders.findOne({where:{
                table2:itemName,
                
            }
        })
            .then(result=>{
                if(result){
                    return result.destroy()
               }
            })
          }else  if(tableName=="Table 3 Orders"){
            return tableOrders.findOne({where:{
                table3:itemName,
                
            }
        })
            .then(result=>{
                if(result){
                    return result.destroy()
               }
            })
          }else  if(tableName=="Table 4 Orders"){
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
