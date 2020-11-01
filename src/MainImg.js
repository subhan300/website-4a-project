import React from 'react'
import "./Section1.css"
function MainImg() {
    return (
       <>

<div class="header-container-image" >
        <img src={require("./light.svg")} class="header-front" />
        <img src={require("./place.svg")}   />
        <img src={require("./brain.svg")}  class="header-brain" / >
      </div>



       </>
    )
}

export default MainImg
