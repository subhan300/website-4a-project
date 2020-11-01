import React from 'react'
import {BlogImg} from "./SampleSectionObj"
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';



import useWebAnimations from "@wellyshen/use-web-animations"; 
function Blog() {
      const { ref } = useWebAnimations({
    keyframes: [{ transform: 'translate(0,0)' }, { transform: 'translate(0px,-25px)' }],
    timing: {
     
      duration: 500, // Run for 1000ms
      iterations: "1", // Repeat once
    
      easing: ['steps(2'],
    },
 
  });

    return (
        <>


<div className="jumbotron  container-fluid py-4 text-center m-0 " id="jump"
>
<ScrollAnimation animateIn="slideInRight"><h1 style={{padding:'40px',color:"white",fontSize:"45px"}}>BLOG </h1></ScrollAnimation>
<div className="container text-center" id="main-cortex-col1">
    <div className="sample_section_row  row py-4 text-center d-flex " style={{
justifyContent:"center"}} id="main-cortex-col2">

     
     {BlogImg.map((v)=>{return(   <div className="col-12 col-md-4 col-sm-6 text-center
     mt-4" >
            <Card className="pb-3 text-center " ref={ref}>
           <ScrollAnimation animateIn="zoomIn"> <img alt="sk" className="img-fluid" src={v.src} style={{height:"200px",
        width:'500px'}}/></ScrollAnimation >
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

export default Blog
