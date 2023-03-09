document.addEventListener("DOMContentLoaded", (e) => {
  let submitBtn = document.querySelector(".submitBtn");
  var tt = { table1: 0, table2: 0, table3: 0, table4: 0 };
  let orderedItemsTable1={itemName: [],totalAmount:0 };
  let orderedItemsTable2={itemName: [],totalAmount:0 };
  let orderedItemsTable3={itemName: [],totalAmount:0 };
  let orderedItemsTable4={itemName: [],totalAmount:0 };
  
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
      

    axios.post("https://crudcrud.com/api/c5d9e96fe17e4913b5ccbedd2ba1607b/restaurant",orderedItemsTable1)
    .then(res => {
        
    })
    .catch(err => {
    
    });
    

   


    

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
      axios.post("https://crudcrud.com/api/c5d9e96fe17e4913b5ccbedd2ba1607b/restaurant",orderedItemsTable2)
      .then(res => {
          console.log(res)
      })
      .catch(err => {
          console.error(err); 
      })
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
      axios.post("https://crudcrud.com/api/c5d9e96fe17e4913b5ccbedd2ba1607b/restaurant",orderedItemsTable3)
      .then(res => {
          console.log(res)
      })
      .catch(err => {
          console.error(err); 
      })
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
      axios.post("https://crudcrud.com/api/c5d9e96fe17e4913b5ccbedd2ba1607b/restaurant",orderedItemsTable4)
      .then(res => {
          console.log(res)
      })
      .catch(err => {
          console.error(err); 
      })
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
