import React, { useEffect, useState } from 'react';
import SimpleBottomNavigation from "./bottom.js"
import GlobalState from "./GlobalState.js"


export default function Infos({Show}) {
    
  
if (Show===1){
  return (
    <>

    <div className={"styler"}  style={{backgroundColor:"pink",display:"flex"}}>

        <GlobalState />
      


</div>


    

 
 

 </>)





  }
  else return(
      <>
      <div>SUBHAN </div>
      </>
  )

  }