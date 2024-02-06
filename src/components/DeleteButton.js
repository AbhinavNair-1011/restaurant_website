import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {

    const deleteHandler= (e)=>{
        let tableno=e.target.parentElement.parentElement.id
let itemName=e.target.parentElement.childNodes[0].textContent

        const deleteApi= async()=>{
            await axios.delete(`http://localhost:4000/api/delete-data/${tableno}/${itemName}`)
        }

        deleteApi();
      
        if (tableno=="table1"){
            
        let a=[itemName]
        
          
        props.setArray(prev => {
            return prev.filter(each => { 
               return each.table1 !== itemName });
          });  
         
        
        
           a.map(each=>{
        console.log(each)
            if(each=="Mushroom Risot"){
              props.setTable1Amount((prev)=>{
                return prev-190
              })
             
        
            }
             if(each=="BBQ Ribs"){
              console.log("working")
              props.setTable1Amount((prev)=>{
                return prev-270
              })
           
              
        
        
            }
            if(each=="Grilled Salon"){
              props.setTable1Amount((prev)=>{
                return prev-340
              })
              
        
        
            }
            if(each=="Chicken Alfredo"){
              props.setTable1Amount(prev=>{
                return prev-520
              })
             
            }
        
          })
        }else if (tableno=="table4"){
            
            let a=[itemName]
            
              
            props.setArray(prev => {
                return prev.filter(each => { 
                   return each.table4 !== itemName });
              
              });  
             
            
            
               a.map(each=>{
            
                if(each=="Mushroom Risot"){
                  props.setTable4Amount((prev)=>{
                    return prev-190
                  })
                 
            
                }
                 if(each=="BBQ Ribs"){
                  console.log("working")
                  props.setTable4Amount((prev)=>{
                    return prev-270
                  })
               
                  
            
            
                }
                if(each=="Grilled Salon"){
                  props.setTable4Amount((prev)=>{
                    return prev-340
                  })
                  
            
            
                }
                if(each=="Chicken Alfredo"){
                  props.setTable4Amount(prev=>{
                    return prev-520
                  })
                 
                }
            
              })
            }else if (tableno=="table2"){
            
                let a=[itemName]
                
                  
                props.setArray(prev => {
                    return prev.filter(each => { 
                     return  each.table2 !== itemName });
                  });  
                
                
                   a.map(each=>{
                
                    if(each=="Mushroom Risot"){
                      props.setTable2Amount((prev)=>{
                        return prev-190
                      })
                     
                
                    }
                     if(each=="BBQ Ribs"){
                      console.log("working")
                      props.setTable2Amount((prev)=>{
                        return prev-270
                      })
                   
                      
                
                
                    }
                    if(each=="Grilled Salon"){
                      props.setTable2Amount((prev)=>{
                        return prev-340
                      })
                      
                
                
                    }
                    if(each=="Chicken Alfredo"){
                      props.setTable2Amount(prev=>{
                        return prev-520
                      })
                     
                    }
                
                  })
                }else if (tableno=="table3"){
            
                    let a=[itemName]
                    
                      
                    props.setArray(prev => {
                        return prev.filter(each => { 
                           return each.table3 !== itemName });
                      });  
                     
                    
                    
                       a.map(each=>{
                    
                        if(each=="Mushroom Risot"){
                          props.setTable3Amount((prev)=>{
                            return prev-190
                          })
                         
                    
                        }
                         if(each=="BBQ Ribs"){
                          console.log("working")
                          props.setTable3Amount((prev)=>{
                            return prev-270
                          })
                       
                          
                    
                    
                        }
                        if(each=="Grilled Salon"){
                          props.setTable3Amount((prev)=>{
                            return prev-340
                          })
                          
                    
                    
                        }
                        if(each=="Chicken Alfredo"){
                          props.setTable3Amount(prev=>{
                            return prev-520
                          })
                         
                        }
                    
                      })
                    }



    }
            
        
  return (
    <button className="button" onClick={deleteHandler}>X</button>
  )
}

export default DeleteButton