import React,{useState} from 'react'
import axios from "axios"

const CustomerOrder= (props) => {
  const [selectedDish,setSelectedDish]=useState([])
  const [selectedTable, setSelectedTable]= useState("")


  const api="http://localhost:4000/api/add-data"

 const submitHandler = async (e)=>{
  e.preventDefault()
  console.log(selectedDish,selectedTable)

if(selectedTable.length<=0){
  alert("select a table")
}else{
  let res= await axios.post(api,{itemName:selectedDish,tableNo:selectedTable})

  if (selectedTable==1){
    let a=[]

    props.setArray((prev)=>{
      
      selectedDish.map(each=>{
         a.push({table1:each})

      })
      return [...prev,...a]

      
    })


  a.map(each=>{

    if(each.table1=="Mushroom Risot"){
      props.setTable1Amount((prev)=>{
        return prev+190
      })
     

    }
     if(each.table1=="BBQ Ribs"){
      console.log("working")
      props.setTable1Amount((prev)=>{
        return prev+270
      })
   
      


    }
    if(each.table1=="Grilled Salon"){
      props.setTable1Amount((prev)=>{
        return prev+340
      })
      


    }
    if(each.table1=="Chicken Alfredo"){
      props.setTable1Amount(prev=>{
        return prev+520
      })
     
    }

  })
    

  }else   if (selectedTable==2){

    let a=[]
    props.setArray((prev)=>{
      selectedDish.map(each=>{
         a.push({table2:each})

      })
      return [...prev,...a]

    })

    a.map(each=>{

      if(each.table2=="Mushroom Risot"){
        props.setTable2Amount((prev)=>{
          return prev+190
        })
       
  
      }
       if(each.table2=="BBQ Ribs"){
        props.setTable2Amount((prev)=>{
          return prev+270
        })
     
        
  
  
      }
      if(each.table2=="Grilled Salon"){
        props.setTable2Amount((prev)=>{
          return prev+340
        })
        
  
  
      }
      if(each.table2=="Chicken Alfredo"){
        props.setTable2Amount(prev=>{
          return prev+520
        })
       
      }})
  
  } else   if (selectedTable==3){
    
    let a=[]
    props.setArray((prev)=>{
      
      selectedDish.map(each=>{
         a.push({table3:each})

      })
      return [...prev,...a]

    })
    a.map(each=>{

      if(each.table3=="Mushroom Risot"){
        props.setTable3Amount((prev)=>{
          return prev+190
        })
       
  
      }
       if(each.table3=="BBQ Ribs"){
        console.log("working")
        props.setTable3Amount((prev)=>{
          return prev+270
        })
     
        
  
  
      }
      if(each.table3=="Grilled Salon"){
        props.setTable3Amount((prev)=>{
          return prev+340
        })
        
  
  
      }
      if(each.table3=="Chicken Alfredo"){
        props.setTable3Amount(prev=>{
          return prev+520
        })
       
      }})
  
  }
  else   if (selectedTable==4){
    let a=[]

    props.setArray((prev)=>{
      
      selectedDish.map(each=>{
         a.push({table4:each})

      })
      return [...prev,...a]

    })
    a.map(each=>{

      if(each.table4=="Mushroom Risot"){
        props.setTable4Amount((prev)=>{
          return prev+190
        })
       
  
      }
       if(each.table4=="BBQ Ribs"){
        console.log("working")
        props.setTable4Amount((prev)=>{
          return prev+270
        })
     
        
  
  
      }
      if(each.table4=="Grilled Salon"){
        props.setTable4Amount((prev)=>{
          return prev+340
        })
        
  
  
      }
      if(each.table4=="Chicken Alfredo"){
        props.setTable4Amount(prev=>{
          return prev+520
        })
       
      }})
  
  }
  
  
}

  
  setSelectedDish([])
  setSelectedTable("")

 }
 const DishHandler = (e)=>{

setSelectedDish([...selectedDish,e.target.value])
 }
const tableHandler= (e)=>{
  setSelectedTable(e.target.value)

  
 

}
  return (<>

    <form onSubmit={submitHandler}>
        <label>Select the Ordered Dish</label>
        <select name="food" id="food" multiple  
        onChange={DishHandler} value={selectedDish}>
            <option value={"Chicken Alfredo"} key={"1"} >Chicken Alfredo</option>
            <option value={"Grilled Salon"} key={"2"}>Grilled Salon</option>
            <option value={"BBQ Ribs"} key={"3"}>BBQ Ribs</option>
            <option value={"Mushroom Risot"} key={"4"}>Mushroom Risot</option>
            
        </select>
       
        <label>Select The Table</label>
        <select name="table" id="table" value={selectedTable} onChange={tableHandler}>
        <option value={"0"} key={"0"} >select here</option>

            <option value={"1"} key={"1"} >Table 1</option>
            <option value={"2"} key={"2"}>Table 2</option>
            <option value={"3"} key={"3"}>Table 3</option>
            <option value={"4"} key={"4"}>Table 4</option>
            
        </select>

<input type="submit" value="Submit"/>

    </form>
    </>
  )
}

export default CustomerOrder
