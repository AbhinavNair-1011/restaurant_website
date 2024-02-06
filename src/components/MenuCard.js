import React from 'react'

const MenuCard = () => {
    console.log("menus")
  return (
   <div id="menuCard">
    <div className="menuFood">
        <p>Chicken Alfredo</p>
        <p>520</p>
    </div>

    <div className="menuFood">
    <p>Grilled Salon</p>
        <p>340</p>
    </div>

    <div className="menuFood">
    <p>BBQ Ribs</p>
        <p>270</p>
    </div>

    <div className="menuFood">
    <p>Mushroom Risot</p>
        <p>190</p>
    </div>



   </div>
  )
}

export default MenuCard