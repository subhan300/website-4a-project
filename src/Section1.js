import React from 'react'
import "./Section1.css"
import MainImg from "./MainImg"



function Section1() {


  
    return (
       <>
<div class="jumbotron py-4 m-0" id="jump"  style={{height:"750px"}}>
  <div className="row py-4 d-flex flex-md-row  text-center " >
<div className="col-12 col-md-5 py-4 align-content-center"  id="main-cortex-col1" style={{color:"white"}}>

  
  
   <h1 id="cortex" style={{
fontSize:"50px"}}>

  CORTEX</h1>
<h1 id="copywriter"  style={{
fontSize:"45px"}}>COPY WRITER
  </h1>
  
  
 
  <hr className="my-4" />
  <p style={{fontSize:"22px"}}>Enhance your communications with psychology-based copywriting and UX writing</p>
  <div className="btn  btn-sm disabled rounded-pill  bg-warning" tabindex="-1" 
  role="button" >Send a message</div>  
 
</div>


<div className="py-4 col-12 col-md-7 text-center"  id="main-cortex-col2" >


<MainImg alt="main"  />







</div>


</div>



</div>



       </>
    )
}

export default Section1
