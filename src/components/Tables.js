import React,{useEffect,useState} from 'react'
import axios from 'axios'
import DeleteButton from './DeleteButton'

const Tables =  (props) => {
  


  return (
    
      
      <ul id="st">
      
      
          <ul id="table1" className="insideTable">
      <li className="tableTitle">Table 1 Orders</li>
  
              <li id="table1" className="amount">total Amount: {props.table1Amount}</li>
              {props.array.map(each=>(
                each.table1!=null ? <li className="ordersList">{each.table1} <DeleteButton
                setArray={props.setArray} setTable1Amount={props.setTable1Amount} setTable2Amount={props.setTable2Amount} 
    setTable3Amount={props.setTable3Amount} setTable4Amount={props.setTable4Amount}/></li>: ""
                
              ))}
              
          </ul>
  
          <ul id="table2" className="insideTable">
      <li className="tableTitle">Table 2 Orders
              </li>
  
              <li id="table2" className="amount">total Amount: {props.table2Amount}</li>
              {props.array.map(each=>(
                each.table2!=null ? <li className="ordersList">{each.table2} <DeleteButton
                setArray={props.setArray} setTable1Amount={props.setTable1Amount} setTable2Amount={props.setTable2Amount} 
    setTable3Amount={props.setTable3Amount} setTable4Amount={props.setTable4Amount}/></li>: ""
              ))}
          </ul>
  
  
          <ul id="table3" className="insideTable">
      <li className="tableTitle"> Table 3 Orders
              </li>
              <li id="table3" className="amount">total Amount: {props.table3Amount}</li>
              {props.array.map(each=>(
                each.table3!=null ? <li className="ordersList">{each.table3} <DeleteButton
                setArray={props.setArray} setTable1Amount={props.setTable1Amount} setTable2Amount={props.setTable2Amount} 
    setTable3Amount={props.setTable3Amount} setTable4Amount={props.setTable4Amount}/></li>: ""
              ))}
           </ul>
  
          <ul id="table4" className="insideTable">
      <li className="tableTitle">Table 4 Orders
              </li>
              <li id="table4" className="amount">total Amount: {props.table4Amount}</li>
              {props.array.map(each=>(
                each.table4!=null ? <li className="ordersList">{each.table4} <DeleteButton
                setArray={props.setArray} setTable1Amount={props.setTable1Amount} setTable2Amount={props.setTable2Amount} 
    setTable3Amount={props.setTable3Amount} setTable4Amount={props.setTable4Amount}/></li>: ""
              ))}
          </ul>
  
  </ul>

    )

  
}

export default Tables