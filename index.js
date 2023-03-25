document.addEventListener("DOMContentLoaded", (e) => {


  
  let submitBtn = document.querySelector(".submitBtn");
  let customAxios=axios.create({
    baseURL:"https://crudcrud.com/api/f432a1f1b5334abda293c0fcba443bf4"
  })

 customAxios.get("/res")
 .then(res=>{

   res.data.forEach((each)=>{
        customAxios.delete(`/res/${each._id}`)
   })
 })

  var tt = { table1: 0, table2: 0, table3: 0, table4: 0 };
  let orderedItemsTable1={tableNo:1,itemName: [],totalAmount:0 };
  let orderedItemsTable2={tableNo:2,itemName: [],totalAmount:0 };
  let orderedItemsTable3={tableNo:3,itemName: [],totalAmount:0 };
  let orderedItemsTable4={tableNo:4,itemName: [],totalAmount:0 };
  orderedItemsTable1.served=false;
  orderedItemsTable2.served=false;
  orderedItemsTable3.served=false;
  orderedItemsTable4.served=false;




  let tableNo1Id;
    let tableNo2Id;

    let tableNo3Id;
    let tableNo4Id;

    async function updatecrud(tableid,data,tableNo){
    
      let responce = await customAxios.put(`/res/${tableid}`,data);
    
       console.log(`updated table ${tableNo} - ${JSON.stringify(data)}`)
      
  
      }


  
  
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let tableNo = document.getElementById("table").value;

    
    let tv = document.querySelectorAll("#st li");
    let insideUl1 = document.querySelector("#table1");
    let insideUl2 = document.querySelector("#table2");
    let insideUl3 = document.querySelector("#table3");
    let insideUl4 = document.querySelector("#table4");

    let text = document.querySelector("#food").selectedOptions;
    if (tableNo == "Table1") {
        
      for (each of text) {
        let total = 0;

        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");

        deleteBtn.appendChild(document.createTextNode("X"));
        deleteBtn.className = "delete";
        deleteBtn.style.float = "right";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";

        li.style.backgroundColor = "rgb(185, 179, 179,0.3)";

        li.appendChild(document.createTextNode(each.value));
        li.appendChild(deleteBtn);
        insideUl1.appendChild(li);
       

        if (each.value === "Chicken Alfredo") {
            orderedItemsTable1.itemName.push(each.value)

          total += 520;
        } else if (each.value === "Grilled Salmon") {
            orderedItemsTable1.itemName.push(each.value)
          total += 340;
        } else if (each.value === "BBQ Ribs") {
            orderedItemsTable1.itemName.push(each.value)
          total += 270;
        } else if (each.value === "Mushroom Risot") {
            orderedItemsTable1.itemName.push(each.value)
          total += 190;
        }

        tt.table1 += total;

        
        orderedItemsTable1.totalAmount=tt.table1;
        
        



      
        let a = document.querySelector("#table11");

        a.innerText = `Total Amount: ${tt.table1}`;

     
      }
     
      
    if(!orderedItemsTable1.served){
      orderedItemsTable1.served=true;

    customAxios.post("/res",orderedItemsTable1)
    .then(res => {
      
         tableNo1Id=res.data._id;
       
        
    })
    .catch(err => {
    console.log(err);
    });

  }else{
   updatecrud(tableNo1Id,orderedItemsTable1,1);
    
  }
      

   


    

    } else if (tableNo == "Table2") {
      for (each of text) {
        let total = 0;
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.appendChild(document.createTextNode("X"));
        deleteBtn.className = "delete";
        deleteBtn.style.float = "right";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";

        li.style.backgroundColor = "rgb(185, 179, 179,0.3)";

        li.appendChild(document.createTextNode(each.value));
        li.appendChild(deleteBtn);

        insideUl2.appendChild(li);
      
        
        
        if (each.value === "Chicken Alfredo") {
            orderedItemsTable2.itemName.push(each.value)

          total += 520;
        } else if (each.value === "Grilled Salmon") {
            orderedItemsTable2.itemName.push(each.value)
          total += 340;
        } else if (each.value === "BBQ Ribs") {
            orderedItemsTable2.itemName.push(each.value)
          total += 270;
        } else if (each.value === "Mushroom Risot") {
            orderedItemsTable2.itemName.push(each.value)
          total += 190;
        }

       
        tt.table2 += total;
        
        orderedItemsTable2.totalAmount=tt.table2;
       


     

      

        let a = document.querySelector("#table22");

        a.innerText = `Total Amount: ${tt.table2}`;
      }
    
      
      if(!orderedItemsTable2.served){
        orderedItemsTable2.served=true;
  
      customAxios.post("/res",orderedItemsTable2)
      .then(res => {
        
           tableNo2Id=res.data._id;
         
          
      })
      .catch(err => {
      console.log(err);
      });
  
    }else{
     updatecrud(tableNo2Id,orderedItemsTable2,2);
      
    }
        
  

    } else if (tableNo == "Table3") {


      for (each of text) {
        let total = 0;
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.appendChild(document.createTextNode("X"));
        deleteBtn.className = "delete";
        deleteBtn.style.float = "right";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";

        li.style.backgroundColor = "rgb(185, 179, 179,0.3)";

        li.appendChild(document.createTextNode(each.value));
        li.appendChild(deleteBtn);

        insideUl3.appendChild(li);
        

        
        if (each.value === "Chicken Alfredo") {
            orderedItemsTable3.itemName.push(each.value)

          total += 520;
        } else if (each.value === "Grilled Salmon") {
            orderedItemsTable3.itemName.push(each.value)
          total += 340;
        } else if (each.value === "BBQ Ribs") {
            orderedItemsTable3.itemName.push(each.value)
          total += 270;
        } else if (each.value === "Mushroom Risot") {
            orderedItemsTable3.itemName.push(each.value)
          total += 190;
        }

        tt.table3 += total;
        
        orderedItemsTable3.totalAmount=tt.table3;



     

        let a = document.querySelector("#table33");

        a.innerText = `Total Amount: ${tt.table3}`;
      }
    
      

      if(!orderedItemsTable3.served){
        orderedItemsTable3.served=true;
  
      customAxios.post("/res",orderedItemsTable3)
      .then(res => {
        
           tableNo3Id=res.data._id;
         
          
      })
      .catch(err => {
      console.log(err);
      });
  
    }else{
     updatecrud(tableNo3Id,orderedItemsTable3,3);
      
    }
        
  


    } else if (tableNo == "Table4") {
      for (each of text) {
        let total = 0;
        let li = document.createElement("li");
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.appendChild(document.createTextNode("X"));
        deleteBtn.style.float = "right";
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";

        li.style.backgroundColor = "rgb(185, 179, 179,0.3)";

        li.appendChild(document.createTextNode(each.value));
        li.appendChild(deleteBtn);

        insideUl4.appendChild(li);

        
        if (each.value === "Chicken Alfredo") {
            orderedItemsTable4.itemName.push(each.value)

          total += 520;
        } else if (each.value === "Grilled Salmon") {
            orderedItemsTable4.itemName.push(each.value)
          total += 340;
        } else if (each.value === "BBQ Ribs") {
            orderedItemsTable4.itemName.push(each.value)
          total += 270;
        } else if (each.value === "Mushroom Risot") {
            orderedItemsTable4.itemName.push(each.value)
          total += 190;
        }

        tt.table4 += total;
        
        orderedItemsTable4.totalAmount=tt.table4;

        

        

        let a = document.querySelector("#table44");

        a.innerText = `Total Amount: ${tt.table4}`;
      }

      if(!orderedItemsTable4.served){
        orderedItemsTable4.served=true;
  
      customAxios.post("/res",orderedItemsTable4)
      .then(res => {
        
           tableNo4Id=res.data._id;
         
          
      })
      .catch(err => {
      console.log(err);
      });
  
    }else{
     updatecrud(tableNo4Id,orderedItemsTable4,4);
      
    }
        
      
      
    }


  });

  let ul = document.querySelector("#st");
  
  ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      let table =
        e.target.parentElement.parentElement.parentElement.childNodes[0].data.trim();

      e.target.parentElement.style.display = "none";

      switch (table) {
        case "Table 1 Orders":
      
          if (e.target.parentElement.childNodes[0].data === "Chicken Alfredo") {
          let index=  orderedItemsTable1.itemName.indexOf("Chicken Alfredo");
          if(index!== -1){
            orderedItemsTable1.itemName.splice(index,1);
            tt.table1 -= 520;
            orderedItemsTable1.totalAmount=tt.table1;
                    }
           
          
          } else if (
            e.target.parentElement.childNodes[0].data === "Grilled Salmon")   {
            let index=  orderedItemsTable1.itemName.indexOf("Grilled Salmon");
            if(index!== -1){
              orderedItemsTable1.itemName.splice(index,1);
              tt.table1 -= 340;
              orderedItemsTable1.totalAmount=tt.table1;
            }
          
          
          } else if (e.target.parentElement.childNodes[0].data === "BBQ Ribs")
    {
        let index=  orderedItemsTable1.itemName.indexOf("BBQ Ribs");
        if(index!== -1){
          orderedItemsTable1.itemName.splice(index,1);
          tt.table1 -= 270;
          orderedItemsTable1.totalAmount=tt.table1;
        }
        
           
          } else if (
            e.target.parentElement.childNodes[0].data === "Mushroom Risot"
          ) {
            let index=  orderedItemsTable1.itemName.indexOf("Mushroom Risot");
            if(index!== -1){
              orderedItemsTable1.itemName.splice(index,1);
              tt.table1 -= 190;
              orderedItemsTable1.totalAmount=tt.table1;
            }
        
          }
          let a = document.querySelector("#table11");

          a.innerText = `Total Amount: ${tt.table1}`;
          updatecrud(tableNo1Id,orderedItemsTable1,1)
        
          break;
        case "Table 2 Orders":
         
        
        if (e.target.parentElement.childNodes[0].data === "Chicken Alfredo") {
            let index= orderedItemsTable2.itemName.indexOf("Chicken Alfredo");
            if(index!== -1){
              orderedItemsTable2.itemName.splice(index,1);
              tt.table2 -= 520;
              orderedItemsTable2.totalAmount=tt.table2;
            }
             
            
            } else if (
              e.target.parentElement.childNodes[0].data === "Grilled Salmon")   {
              let index=  orderedItemsTable2.itemName.indexOf("Grilled Salmon");
              if(index!== -1){
                orderedItemsTable2.itemName.splice(index,1);
                tt.table2 -= 340;
                orderedItemsTable2.totalAmount=tt.table2;
              }
            
            
            } else if (e.target.parentElement.childNodes[0].data === "BBQ Ribs")
      {
          let index=  orderedItemsTable2.itemName.indexOf("BBQ Ribs");
          if(index!== -1){
            orderedItemsTable2.itemName.splice(index,1);
            tt.table2 -= 270;
            orderedItemsTable2.totalAmount=tt.table2;
          }
          
             
            } else if (
              e.target.parentElement.childNodes[0].data === "Mushroom Risot"
            ) {
              let index=  orderedItemsTable2.itemName.indexOf("Mushroom Risot");
              if(index!== -1){
                orderedItemsTable2.itemName.splice(index,1);
                tt.table2 -= 190;
                orderedItemsTable2.totalAmount=tt.table2;
              }
          
            }



          let b = document.querySelector("#table22");

          b.innerText = `Total Amount: ${tt.table2}`;
          updatecrud(tableNo2Id,orderedItemsTable2,2)

          break;
        case "Table 3 Orders":
         
        
        if (e.target.parentElement.childNodes[0].data === "Chicken Alfredo") {
            let index= orderedItemsTable3.itemName.indexOf("Chicken Alfredo");
            if(index!== -1){
              orderedItemsTable3.itemName.splice(index,1);
              tt.table3 -= 520;
              orderedItemsTable3.totalAmount=tt.table3;
            }
             
            
            } else if (
              e.target.parentElement.childNodes[0].data === "Grilled Salmon")   {
              let index=  orderedItemsTable3.itemName.indexOf("Grilled Salmon");
              if(index!== -1){
                orderedItemsTable3.itemName.splice(index,1);
                tt.table3 -= 340;
                orderedItemsTable3.totalAmount=tt.table3;
              }
            
            
            } else if (e.target.parentElement.childNodes[0].data === "BBQ Ribs")
      {
          let index=  orderedItemsTable3.itemName.indexOf("BBQ Ribs");
          if(index!== -1){
            orderedItemsTable3.itemName.splice(index,1);
            tt.table3 -= 270;
            orderedItemsTable3.totalAmount=tt.table3;
          }
          
             
            } else if (
              e.target.parentElement.childNodes[0].data === "Mushroom Risot"
            ) {
              let index=  orderedItemsTable3.itemName.indexOf("Mushroom Risot");
              if(index!== -1){
                orderedItemsTable3.itemName.splice(index,1);
                tt.table3 -= 190;
                orderedItemsTable3.totalAmount=tt.table3;
              }
          
            }

        
        
          
          let c = document.querySelector("#table33");

          c.innerText = `Total Amount: ${tt.table3}`;
           updatecrud(tableNo3Id,orderedItemsTable3,3)

          break;
        case "Table 4 Orders":
         
        
        if (e.target.parentElement.childNodes[0].data === "Chicken Alfredo") {
            let index= orderedItemsTable4.itemName.indexOf("Chicken Alfredo");
            if(index!== -1){
              orderedItemsTable4.itemName.splice(index,1);
              tt.table4 -= 520;
              orderedItemsTable4.totalAmount=tt.table4;
              
            }
             
            
            } else if (
              e.target.parentElement.childNodes[0].data === "Grilled Salmon")   {
              let index=  orderedItemsTable4.itemName.indexOf("Grilled Salmon");
              if(index!== -1){
                orderedItemsTable4.itemName.splice(index,1);
                tt.table4 -= 340;
                orderedItemsTable4.totalAmount=tt.table4;
              }
            
            
            } else if (e.target.parentElement.childNodes[0].data === "BBQ Ribs")
      {
          let index=  orderedItemsTable4.itemName.indexOf("BBQ Ribs");
          if(index!== -1){
            orderedItemsTable4.itemName.splice(index,1);
            tt.table4 -= 270;
            orderedItemsTable4.totalAmount=tt.table4;
           
          }
          
             
            } else if (
              e.target.parentElement.childNodes[0].data === "Mushroom Risot"
            ) {
              let index=  orderedItemsTable4.itemName.indexOf("Mushroom Risot");
              if(index!== -1){
                orderedItemsTable4.itemName.splice(index,1);
                tt.table4 -= 190;
                orderedItemsTable4.totalAmount=tt.table4;
               
              }
          
            }



          let d = document.querySelector("#table44");

          d.innerText = `Total Amount: ${tt.table4}`;
          updatecrud(tableNo4Id,orderedItemsTable4,4);
          break;

        default:
          break;
      }

    }

  });

  let menuBtn = document.querySelector(".menuBtn");

  menuBtn.addEventListener("mouseover", (e) => {
    let menuDiv = document.querySelector(".foods");
    let button = document.createElement("button");
    let h2 = document.querySelector(".h2");

    button.appendChild(document.createTextNode("X"));
    button.style.height = "30px";
    button.style.width = "30px";
    button.style.margin = "10px";
    button.style.float = "right";
    button.setAttribute("class", "close");
    h2.appendChild(button);

    menuDiv.style.visibility = "unset";
    menuDiv.style.display = "flex";
    menuDiv.style.justifyContent = "space-between";

    button.addEventListener("click", (e) => {
      menuDiv.style.display = "none";
      button.style.display = "none";
    });
  });





});
