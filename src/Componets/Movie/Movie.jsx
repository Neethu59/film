
import React, {  useEffect, useState } from 'react'
import'./Movie.css';
import axios from 'axios';
import {Search} from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';
export default function Movie() {
const[value,setValue]=useState([]);
const[data,setData]=useState({});
const[id,setId]=useState([]);
// http://www.omdbapi.com/?i=tt0800080&apikey=b4372579

const registerSubmit=(event)=>{
    event.preventDefault();
    console.log(data.name);
    console.log(data)
axios.get(`http://www.omdbapi.com/?s=${data.name}&apikey=b4372579`)

.then(response=>{
    console.log(response)
    console.log(response.data)
    setValue(response.data.Search) 
    setId(response.data.Search
      )
})

    setData({name:""})
console.log(data)
}

const setRegister=(event)=>{
    
    const{name,value}=event.target
    setData({
      ...data,[name]:value
    })
    console.log(data)
    }
console.log(value)

const navigate=useNavigate()
const filmid=(id)=>{
  console.log(id);
  navigate(`/view/${id}`)
  // axios.get(`http://www.omdbapi.com/?i=${id}&apikey=b4372579`)
  // .then(response=>{
  //   console.log(response)
  // })
}

  
  return (
    <>
    <form  >
<div id="save">
    <p style={{marginLeft:"15%",marginTop:"2%"}}>Home</p>
<p style={{marginLeft:"3%",marginTop:"2%"}}>About</p>
    <input type="text" placeholder="search movie name "  id="inputtext" name="name" value={data.name||""}onChange={setRegister}></input>
    <Search id="search" onClick={registerSubmit}/>

    </div>
    </form>
<div class="container">
    <div class="row">
  
{value == "" ? <>
<div class="col-12 col-md-6 col-lg-4 mb-4"style={{marginTop:"5%"}}>
    <div class="card">
    <div class="card-body">
    <h5 class="card-text"style={{color:"red"}}>
      This movie not exist!
    </h5>
    </div>
    </div>
</div>
</> :
<>
        {value?.map((movie)=>
//         <div class="row"style={{marginLeft:"10%"}}>
//             <div class="card"col-sm-3>
//     <img class="card-img-top" src= alt="Card image cap"/>
//     <div class="card-body">
//       <h5 class="card-title"></h5>
//       <p class="card-text">{movie.Year}</p>
//       <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//       <h1>{movie.imdbID}</h1>
//       <button onClick={()=>filmid(movie.imdbID)}>view</button>
//     </div>
//   </div>
//  </div >

  
  <div class="col-12 col-md-6 col-lg-4 mb-4">
    <div class="card">
      <img class="card-img-top" src={movie?.Poster} alt="Card image cap"/>
      <div class="card-body">
        <p class="card-text">{movie?.Title}</p>
        <p class="card-text">{movie.Year}</p>
        <button onClick={()=>filmid(movie.imdbID)}id="button">view</button>
      </div>
    </div>
  </div>
  


   
        )}

</> }

</div>   
</div> 
    </>
  )
}
