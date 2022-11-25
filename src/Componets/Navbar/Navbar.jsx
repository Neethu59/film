import React from 'react'
import'./Navbar.css';
import {Search} from '@mui/icons-material/';
export default function Navbar() {
  return (
    <>
    <div id="save">
    <p style={{marginLeft:"15%",marginTop:"2%"}}>Home</p>
<p style={{marginLeft:"3%",marginTop:"2%"}}>About</p>
    <input type="text" placeholder="search movie name "  id="inputtext"></input><Search id="search"/>

    </div>
    </>
  )
}
