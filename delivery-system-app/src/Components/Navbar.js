import React from 'react'
import { Link } from 'react-router-dom';



function Navbar () {
  

  
  return (
    <div className="navbar">
      <div>
        <h2>DELIVERY APP</h2>
      </div>

    <button className="nav-button">
    <Link to="/register" className="table-button-text" >Sign Up</Link>
    </button>
  </div>
 
    )
   
}

  export default  Navbar; 