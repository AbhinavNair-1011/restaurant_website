async function addData(details) {
  return await axios.post("http://localhost:3000/api/add-data", details)
}

async function deleteData(tableno, itemName) {
  return await axios.delete(`http://localhost:3000/api/delete-data/${tableno}/${itemName}`)
}
async function fetchData() {
  return await axios.get("/api/fetch-data")
}



document.addEventListener("DOMContentLoaded", (e) => {

  let tt1 = 0; let tt2 = 0; let tt3 = 0
  let tt4 = 0;

  fetchData()
    .then(result => {
      let insideUl1 = document.querySelector("#table1");
      let insideUl2 = document.querySelector("#table2");
      let insideUl3 = document.querySelector("#table3");
      let insideUl4 = document.querySelector("#table4");



      for (let each1 of result.data.data) {
        // console.log(each1)


        if (each1.table1 !== null) {
          // console.log(each1.table1)



          let li = document.createElement("li");
          let deleteBtn = document.createElement("button");

          deleteBtn.appendChild(document.createTextNode("X"));
          deleteBtn.className = "delete";
          deleteBtn.style.float = "right";
          deleteBtn.style.backgroundColor = "red";
          deleteBtn.style.color = "white";

          li.style.backgroundColor = "rgb(185, 179, 179,0.3)";

          li.appendChild(document.createTextNode(each1.table1));
          li.appendChild(deleteBtn);
          insideUl1.appendChild(li);


          if (each1.table1 === "Chicken Alfredo") {

            tt1 += 520;
          } else if (each1.table1 === "Grilled Salmon") {

            tt1 += 340;
          } else if (each1.table1 === "BBQ Ribs") {

            tt1 += 270;
          } else if (each1.table1 === "Mushroom Risot") {

            tt1 += 190;
          }

          let a = document.querySelector("#table11");

          a.innerText = `Total Amount: ${tt1}`;



        } else {

        }
        if (each1.table2 !== null) {


          let li = document.createElement("li");
          let deleteBtn = document.createElement("button");
          deleteBtn.appendChild(document.createTextNode("X"));
          deleteBtn.className = "delete";
          deleteBtn.style.float = "right";
          deleteBtn.style.backgroundColor = "red";
          deleteBtn.style.color = "white";

          li.style.backgroundColor = "rgb(185, 179, 179,0.3)";

          li.appendChild(document.createTextNode(each1.table2));
          li.appendChild(deleteBtn);

          insideUl2.appendChild(li);



          if (each1.table2 === "Chicken Alfredo") {

            tt2 += 520;
          } else if (each1.table2 === "Grilled Salmon") {

            tt2 += 340;
          } else if (each1.table2 === "BBQ Ribs") {

            tt2 += 270;
          } else if (each1.table2 === "Mushroom Risot") {

            tt2 += 190;
          }


          let a = document.querySelector("#table22");

          a.innerText = `Total Amount: ${tt2}`;






        } else {

        }
        if (each1.table3 !== null) {




          let li = document.createElement("li");
          let deleteBtn = document.createElement("button");
          deleteBtn.appendChild(document.createTextNode("X"));
          deleteBtn.className = "delete";
          deleteBtn.style.float = "right";
          deleteBtn.style.backgroundColor = "red";
          deleteBtn.style.color = "white";

          li.style.backgroundColor = "rgb(185, 179, 179,0.3)";

          li.appendChild(document.createTextNode(each1.table3));
          li.appendChild(deleteBtn);

          insideUl3.appendChild(li);



          if (each1.table3 === "Chicken Alfredo") {

            tt3 += 520;
          } else if (each1.table3 === "Grilled Salmon") {

            tt3 += 340;
          } else if (each1.table3 === "BBQ Ribs") {

            tt3 += 270;
          } else if (each1.table3 === "Mushroom Risot") {

            tt3 += 190;
          }




          let a = document.querySelector("#table33");

          a.innerText = `Total Amount: ${tt3}`;



        } else {

        }
        if (each1.table4 !== null) {

          let total = 0;
          let li = document.createElement("li");
          let deleteBtn = document.createElement("button");
          deleteBtn.className = "delete";
          deleteBtn.appendChild(document.createTextNode("X"));
          deleteBtn.style.float = "right";
          deleteBtn.style.backgroundColor = "red";
          deleteBtn.style.color = "white";

          li.style.backgroundColor = "rgb(185, 179, 179,0.3)";

          li.appendChild(document.createTextNode(each1.table4));
          li.appendChild(deleteBtn);

          insideUl4.appendChild(li);


          if (each1.table4 === "Chicken Alfredo") {

            tt4 += 520;
          } else if (each1.table4 === "Grilled Salmon") {

            tt4 += 340;
          } else if (each1.table4 === "BBQ Ribs") {

            tt4 += 270;
          } else if (each1.table4 === "Mushroom Risot") {

            tt4 += 190;
          }



          let a = document.querySelector("#table44");

          a.innerText = `Total Amount: ${tt4}`;


        } else {

        }
      }
    })



  let submitBtn = document.querySelector(".submitBtn");


  var tt = { table1: 0 + tt1, table2: 0 + tt2, table3: 0 + tt3, table4: 0 + tt4 };

  let orderedItemsTable1 = { tableNo: 1, itemName: [], totalAmount: 0 };
  let orderedItemsTable2 = { tableNo: 2, itemName: [], totalAmount: 0 };
  let orderedItemsTable3 = { tableNo: 3, itemName: [], totalAmount: 0 };
  let orderedItemsTable4 = { tableNo: 4, itemName: [], totalAmount: 0 };
  orderedItemsTable1.served = false;
  orderedItemsTable2.served = false;
  orderedItemsTable3.served = false;
  orderedItemsTable4.served = false;




  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let tableNumber;
    let tableItem = [];
    let tableNo = document.getElementById("table").value;



    let tv = document.querySelectorAll("#st li");
    let insideUl1 = document.querySelector("#table1");
    let insideUl2 = document.querySelector("#table2");
    let insideUl3 = document.querySelector("#table3");
    let insideUl4 = document.querySelector("#table4");

    let text = document.querySelector("#food").selectedOptions;
    if (tableNo == "Table1") {

      for (each of text) {


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
          tableItem.push(each.value)
          tt1 += 520;
        } else if (each.value === "Grilled Salmon") {
          orderedItemsTable1.itemName.push(each.value)
          tableItem.push(each.value)
          tt1 += 340;
        } else if (each.value === "BBQ Ribs") {
          orderedItemsTable1.itemName.push(each.value)
          tableItem.push(each.value)
          tt1 += 270;
        } else if (each.value === "Mushroom Risot") {
          orderedItemsTable1.itemName.push(each.value)
          tableItem.push(each.value)
          tt1 += 190;
        }
        tableNumber = 1;




      }
      let a = document.querySelector("#table11");
      a.innerText = `Total Amount: ${tt1}`;

      let details = {
        tableNo: tableNumber,
        itemName: tableItem

      }
      addData(details)



    } else if (tableNo == "Table2") {

      for (each of text) {

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
          tableItem.push(each.value)
          tt2 += 520;
        } else if (each.value === "Grilled Salmon") {
          orderedItemsTable2.itemName.push(each.value)
          tableItem.push(each.value)
          tt2 += 340;
        } else if (each.value === "BBQ Ribs") {
          orderedItemsTable2.itemName.push(each.value)
          tableItem.push(each.value)
          tt2 += 270;
        } else if (each.value === "Mushroom Risot") {
          orderedItemsTable2.itemName.push(each.value)
          tableItem.push(each.value)
          tt2 += 190;
        }


        // tt.table2 += total;

        tableNumber = 2;

      }
      let a = document.querySelector("#table22");
      a.innerText = `Total Amount: ${tt2}`;
      let details = {
        tableNo: tableNumber,
        itemName: tableItem

      }
      addData(details)



    } else if (tableNo == "Table3") {


      for (each of text) {

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
          tableItem.push(each.vaule)

          tt3 += 520;
        } else if (each.value === "Grilled Salmon") {
          orderedItemsTable3.itemName.push(each.value)
          tableItem.push(each.value)
          tt3 += 340;
        } else if (each.value === "BBQ Ribs") {
          orderedItemsTable3.itemName.push(each.value)
          tableItem.push(each.value)
          tt3 += 270;
        } else if (each.value === "Mushroom Risot") {
          orderedItemsTable3.itemName.push(each.value)
          tableItem.push(each.value)
          tt3 += 190;
        }


        orderedItemsTable3.totalAmount = tt.table3;
        tableNumber = 3;





      }
      let a = document.querySelector("#table33");
      a.innerText = `Total Amount: ${tt3}`;

      let details = {
        tableNo: tableNumber,
        itemName: tableItem

      }
      addData(details)



    } else if (tableNo == "Table4") {

      for (each of text) {

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
          tableItem.push(each.value)
          tt4 += 520;
        } else if (each.value === "Grilled Salmon") {
          orderedItemsTable4.itemName.push(each.value)
          tableItem.push(each.value)
          tt4 += 340;
        } else if (each.value === "BBQ Ribs") {
          orderedItemsTable4.itemName.push(each.value)
          tableItem.push(each.value)
          tt4 += 270;
        } else if (each.value === "Mushroom Risot") {
          orderedItemsTable4.itemName.push(each.value)
          tableItem.push(each.value)
          tt4 += 190;
        }


        orderedItemsTable4.totalAmount = tt.table4;
        tableNumber = 4;


      }
      let a = document.querySelector("#table44");
      a.innerText = `Total Amount: ${tt4}`;
      let details = {
        tableNo: tableNumber,
        itemName: tableItem

      }
      addData(details)


    }


  });

  let ul = document.querySelector("#st");

  ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
      let table =
        e.target.parentElement.parentElement.parentElement.childNodes[0].data.trim();

      e.target.parentElement.style.display = "none";
      let itemToBeDeleted = e.target.parentElement.childNodes[0].data;
      deleteData(table, itemToBeDeleted)
      switch (table) {
        case "Table 1 Orders":

          if (e.target.parentElement.childNodes[0].data === "Chicken Alfredo") {

            tt1 -= 520;


          } else if (
            e.target.parentElement.childNodes[0].data === "Grilled Salmon") {

            tt1 -= 340;

          }


          else if (e.target.parentElement.childNodes[0].data === "BBQ Ribs") {

            tt1 -= 270;

          }


          else if (
            e.target.parentElement.childNodes[0].data === "Mushroom Risot"
          ) {

            tt1 -= 190;

          }


          let a = document.querySelector("#table11");
          a.innerText = `Total Amount: ${tt1}`;

          break;

        case "Table 2 Orders":


          if (e.target.parentElement.childNodes[0].data === "Chicken Alfredo") {
            
              tt2 -= 520;
             
            
          } else if (
            e.target.parentElement.childNodes[0].data === "Grilled Salmon") {
           
              tt2 -= 340;
              


          } else if (e.target.parentElement.childNodes[0].data === "BBQ Ribs") {
            let index = orderedItemsTable2.itemName.indexOf("BBQ Ribs");
            
              tt2 -= 270;
              

          } else if (
            e.target.parentElement.childNodes[0].data === "Mushroom Risot"
          ) {
            
              tt2 -= 190;
              

          }



          let b = document.querySelector("#table22");

          b.innerText = `Total Amount: ${tt2}`;


          break;
        case "Table 3 Orders":


          if (e.target.parentElement.childNodes[0].data === "Chicken Alfredo") {
            
              tt3 -= 520;
              
          } else if (
            e.target.parentElement.childNodes[0].data === "Grilled Salmon") {
            
              tt3 -= 340;
             

          } else if (e.target.parentElement.childNodes[0].data === "BBQ Ribs") {
            
              tt3 -= 270;
             

          } else if (
            e.target.parentElement.childNodes[0].data === "Mushroom Risot"
          ) {
            
              tt3 -= 190;
              orderedItemsTable3.totalAmount = tt.table3;
            }

          

          let c = document.querySelector("#table33");

          c.innerText = `Total Amount: ${tt3}`;

          break;
        case "Table 4 Orders":


          if (e.target.parentElement.childNodes[0].data === "Chicken Alfredo") {
           
              tt4 -= 520;
          


          } else if (
            e.target.parentElement.childNodes[0].data === "Grilled Salmon") {
            
              tt4 -= 340;
             
          } else if (e.target.parentElement.childNodes[0].data === "BBQ Ribs") {
            
              tt4 -= 270;
             
          } else if (
            e.target.parentElement.childNodes[0].data === "Mushroom Risot"
          ) {
            
              tt4 -= 190;
             
          }



          let d = document.querySelector("#table44");
          d.innerText = `Total Amount: ${tt4}`;


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
g
    button.addEventListener("click", (e) => {
      menuDiv.style.display = "none";
      button.style.display = "none";
    });
  });



});
