import React from 'react'

const Header = () => {
  console.log("header")
  return (
   <header>
    <h1>New Luxury Restaurant</h1>
    <ul id="navList">
      <li>Cruisine</li>
      <li>Beverages</li>
      <li>Home Delivery</li>
    </ul>
   </header>
  )
}

export default Header