import React, { useState } from 'react'
import axios from "axios"
import { Formik } from 'formik'
import './style.css'

let baseUrl = ``
if(window.location.href.split(":")[0]==="http"){
  let baseUrl = `http://localhost:3000` 
}

export const Weather = () => {
    const [weatherdata,Setweatherdata]=useState(null)
    const [cname,Setname]= useState("")
    // console.log(weather)
    const clickHandler =(e)=>{
        e.preventDefault();
      axios.get(`${baseUrl}/weather/${cname}`)
      .then(response =>{
        console.log("response",response)
        Setweatherdata(response.data)
      })
      .catch(err =>{
        console.log("error",err)
      })
    }
   
  return (
  <>
<div className="nav">
    <div className="logo"><img width="100%" src="https://cdn-icons-png.flaticon.com/512/4052/4052984.png" alt="" /></div>
    <div className="search"><input type="text" onChange={(e)=>{Setname(e.target.value)}} /> <button onClick={clickHandler}>Search</button></div>
</div>
 <div className="display">
  <div className="name">{weatherdata?.name}</div>
  <br />
  <div className="img"></div>
  {(weatherdata=== null)? null:
  <div className="temp">Current Temp: {weatherdata?.temp}°C 
  <br />
  Feels Like:  {weatherdata?.main?.feels_like}°C 
  <br />
  
  MAX Temp:  {weatherdata?.max}°C 
  <br />
  MIN Temp:  {weatherdata?.min}°C 

  <br />
  Humidaty:  {weatherdata?.humidaity}°C 
  </div>
  }
 </div>

  </>
    
  )
}
export default Weather