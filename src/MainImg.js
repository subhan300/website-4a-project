import React from 'react'
import "./Section1.css"
function MainImg() {
    return (
       <>

<div class="header-container-image" >
        <img alt="s" src={require("./light.svg")} class="header-front" />
        <img alt="dd" src={require("./place.svg")}   />
        <img alt="sks" src={require("./brain.svg")}  class="header-brain" / >
      </div>



       </>
    )
}

export default MainImg
