import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import ScrollAnimation from 'react-animate-on-scroll'
function AboutUsSection() {
    return (
      <>


<div class="jumbotron  m-0 py-md-4 py-3" id="jump" style={{height:"750px"}}>
  <div className="row py-md-4 py-0 d-flex flex-md-row flex-column-reverse text-center " 
  id="main-cortex-col1">
<div className="col-12 col-sm-6 py-4 align-content-center"  id="main-cortex-col1" 
style={{color:"white"}} >

   <ScrollAnimation animateIn="flipInY">
   <div  style={{textAlign:'center',display:'flex',justifyContent:"center"}}>
<Avatar className="py-2 py-md-4"  style={{height:'350px',width:"350px",textAlign:'center '}}   alt="Remy Sharp" 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHIgOdGBPID_9_oBhMK-BaxIXBfZjWlNfgEQ&usqp=CAU"  />

</div> 
   </ScrollAnimation>
<p className="py-md-4 py-4">MUHAMMAD SUBHAN AKRAM, the Cortex Copywriter</p> 
 
  

</div>


<div className="col-12 col-sm-6  py-4"  id="main-cortex-col2">
<ScrollAnimation animateIn="flipInX"><h1 className="py-md-4  py-4" style={{
  color:"white",fontSize:'50px',textAlign:'center',marginLeft:'6px',marginTop:'40px'}}>

About Us

</h1></ScrollAnimation>

<ScrollAnimation animateIn="flipInX"><p className="py-2" style={{color:"white",fontSize:"18px",fontWeight:'bolder',
textAlign:"left"}}>My copywriting and 
UX writing draws on abilities developed in the psychological sciences.

</p>


<p className="py-2" style={{color:"white",fontSize:"18px",fontWeight:'bolder',
textAlign:"left"}}>
Expertise in visual perception, behavioral motivation, and decision-making allows me to 
engineer words that convert customers and guide users.</p></ScrollAnimation>






</div>


</div>


<hr style={{backgroundColor:"white",marginTop:"150px"}}></hr>
</div>




      </>
    )
}

export default AboutUsSection
