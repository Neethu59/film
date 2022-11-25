import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function View() {
    const {id}=useParams()
    console.log(id);
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.get(`http://www.omdbapi.com/?i=${id}&apikey=b4372579`)
        .then(response=>{
          console.log(response.data)
          setData(response.data)
        }) 
    },[])
    console.log(data);
  return (
    <>
    <div class="container d-flex justify-content-center">
     <figure > <img src={data.Poster} style={{width:"100%",height:"50%"}}/>
         <figcaption class="info-wrap">
             <div class="row">
                 <div class="col-md-9 col-xs-9"> <h3>{data.Title} </h3></div>
                 <div class="col-md-3 col-xs-3">
                     <div class="rating text-right"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <span class="rated">{data.Year}</span> </div>
                 </div>
             </div>
         </figcaption>
         
         <h6>Director:{data.Director}</h6>
         <h6>Writer:{data.Writer}</h6>
         <h6>Actors:{data.Actors}</h6>
         <h6>Plot:{data.Plot}</h6>
         <h6>Released : {data.Released}</h6>
         <h6>Language:{data.Language}</h6>
         <h6>Runtime : {data.Runtime}</h6>
         <h6>Award : {data.Awards}</h6>
        
     </figure>
 </div>

   
    </>
  )
}
