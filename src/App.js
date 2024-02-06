import './App.css';
import Header from './components/Header';
import MenuCard from './components/MenuCard';
import CustomerOrder from './components/CustomerOrder';
import Tables from './components/Tables';
import Footer from './components/Footer'
import { useState ,useEffect} from 'react';
import axios from 'axios'

function App() {

  const [array,setArray]=useState([])

  const [table1Amount, setTable1Amount]=useState(0)
const [table2Amount, setTable2Amount]=useState(0)
const [table3Amount, setTable3Amount]=useState(0)
const [table4Amount, setTable4Amount]=useState(0)


  useEffect( ()=>{
    const fetchData=async ()=>{
      let res= await axios.get("http://localhost:4000/api/fetch-data")
      setArray(res.data.data)
 
      res.data.data.map(each=>{
        if(each.table1!=null){
          if(each.table1=="Mushroom Risot"){
            setTable1Amount((prev)=>{
              return prev+190
            })
           

          }
           if(each.table1=="BBQ Ribs"){
            console.log("working")
            setTable1Amount((prev)=>{
              return prev+270
            })
         
            


          }
          if(each.table1=="Grilled Salon"){
            setTable1Amount((prev)=>{
              return prev+340
            })
            


          }
          if(each.table1=="Chicken Alfredo"){
            setTable1Amount(prev=>{
              return prev+520
            })
           

          }
        }
        if(each.table2!=null){
          if(each.table2=="Mushroom Risot"){
            setTable2Amount((prev)=>{
              return prev+190
            })
          }
           if(each.table2=="BBQ Ribs"){
            setTable2Amount((prev)=>{
              return prev+270
            })
          }
          if(each.table2=="Grilled Salon"){
            setTable2Amount((prev)=>{
              return prev+340
            })
          }
          if(each.table2=="Chicken Alfredo"){
            setTable2Amount(prev=>{
              return prev+520
            })
          }
        }
        if(each.table3!=null){
          if(each.table3=="Mushroom Risot"){
            setTable3Amount((prev)=>{
              return prev+190
            })
          }
           if(each.table3=="BBQ Ribs"){
            setTable3Amount((prev)=>{
              return prev+270
            })
          }
          if(each.table3=="Grilled Salon"){
            setTable3Amount((prev)=>{
              return prev+340
            })
          }
          if(each.table3=="Chicken Alfredo"){
            setTable3Amount(prev=>{
              return prev+520
            })
          }
        }
        if(each.table4!=null){
          if(each.table4=="Mushroom Risot"){
            setTable4Amount((prev)=>{
              return prev+190
            })
          }
           if(each.table4=="BBQ Ribs"){
            setTable4Amount((prev)=>{
              return prev+270
            })
          }
          if(each.table4=="Grilled Salon"){
            setTable4Amount((prev)=>{
              return prev+340
            })
          }
          if(each.table4=="Chicken Alfredo"){
            setTable4Amount(prev=>{
              return prev+520
            })
          }
        }
      })
  
    }
    fetchData();

      
 
  },
  []) 

  console.log("app")
  return (<>
    <Header/>
    <main>
    < MenuCard/>
    <CustomerOrder setArray={setArray} setTable1Amount={setTable1Amount} setTable2Amount={setTable2Amount} 
    setTable3Amount={setTable3Amount} setTable4Amount={setTable4Amount}/>
    < Tables setArray={setArray} array={array} table1Amount={table1Amount}
    table2Amount={table2Amount} table3Amount={table3Amount} table4Amount={table4Amount}
     setTable1Amount={setTable1Amount} setTable2Amount={setTable2Amount} 
    setTable3Amount={setTable3Amount} setTable4Amount={setTable4Amount}/>
    </main>
    <Footer/>
    
    </>
  )
}

export default App;
