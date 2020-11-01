
import React from 'react'
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

import ScrollAnimation from 'react-animate-on-scroll'
import ImgObj,{DigitalCopyImg} from "./SampleSectionObj"

import "./Section1.css"
function samplesection() {
    return (
     <>

<div className="jumbotron sample_section container-fluid py-4  text-center m-0" id="jump"
>
    <div className="py-4"></div>
    <div className="py-4"></div>
    <div className="py-4"></div>
   <ScrollAnimation  animateIn="slideInRight">
       <div className="py-4"><h1 className="py-4"  style={{padding:'40px',color:"white"}}>Useful UX</h1>  </div> </ScrollAnimation>
    <div className="sample_section_row  row py-4 text-center " id="main-cortex-col1">

     
     {ImgObj.map((v)=>{return(   <div className="col-12 col-md-4 col-sm-6 text-center
     mt-4">
            <Card className="pb-3 text-center" >
           <ScrollAnimation  animateIn="zoomIn"> <img className="img-fluid" src={v.src} style={{height:"200px",
        width:'500px'}}/></ScrollAnimation>
            <CardContent>
            Here is the first screen in an onboarding process I wrote for a SaaS product. To create a smooth introduction to the product and improve conversion rates, I used reassuring details and informative labels to clear possible uncertainties and reduce ambiguit
            </CardContent>
            <button type="button" class="btn btn-outline-warning mx-3 ">See More</button>
            <button type="button" class="btn btn-outline-warning  ">See More</button>
            </Card>
        </div>
)})}

    </div>
</div>




{/* digital copy section  */}


<div className="jumbotron  container-fluid py-4 text-center m-0 " id="jump"
>
  <ScrollAnimation animateIn="slideInRight"><div><h1 style={{padding:'40px',color:'white'}}>Digital Copy</h1> </div>  </ScrollAnimation>
<div className="container text-center" id="main-cortex-col1">
    <div className="sample_section_row  row py-4 text-center d-flex " style={{
justifyContent:"center"}} id="main-cortex-col2">

     
     {DigitalCopyImg.map((v)=>{return(   <div className="col-12 col-md-4 col-sm-6 text-center
     mt-4" >
            <Card className="pb-3 text-center " >
           <ScrollAnimation animateIn="zoomIn"> <img className="img-fluid" src={v.src} style={{height:"200px",
        width:'500px'}}/></ScrollAnimation>
            <CardContent>
            Here is the first screen in an onboarding process I wrote for a SaaS product. To create a smooth introduction to the product and improve conversion rates, I used reassuring details and informative labels to clear possible uncertainties and reduce ambiguit
            </CardContent>
           
            </Card>
        </div>
)})}

    </div>
</div>
<hr style={{backgroundColor:"white",marginTop:"150px"}}></hr>
</div>




     </>
    )
}

export default samplesection
