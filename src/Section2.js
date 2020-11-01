import React from 'react'
 
import ScrollAnimation from 'react-animate-on-scroll'
import "./Section1.css"
function Section2() {
  // const { ref} = useWebAnimations({...fadeIn,
    // keyframes: [{ transform: 'translate(0,0)' }, { transform: 'translate(0px,-25px)' }],
    // timing: {
     
      // duration: 1000, // Run for 1000ms
      // iterations: "Infinity", // Repeat once
    
      // easing: ['steps(2'],
  //   },
  
  // });
  
    return (
       <>
<div class="jumbotron py-4 m-0" id="jump" style={{height:"750px"}}>
  <div className="row py-4 d-flex flex-md-row flex-column-reverse text-center " >
<div  className="col-12 col-sm-6 py-4 align-content-center"  id="main-cortex-col1" >
 
 <ScrollAnimation animateIn="flipInX"><img alt="fss" src={require("./section2img1.svg")}  /></ScrollAnimation>
  
  
 
  

</div>


<div className="col-12 col-sm-6  py-4"  id="main-cortex-col2" >

<ScrollAnimation   animateIn="flipInX"><h1 className="py-4 text-center" style={{color:"white",fontSize:'60px',textAlign:'left'}}>UX Writing</h1></ScrollAnimation>

<ScrollAnimation  animateIn="flipInX"><p className="py-2" style={{color:"white",fontSize:"14px",fontWeight:'bolder'}}>I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.
</p></ScrollAnimation>

<ul  id="main-ul "  style={{color:"white",display:'flex',justifyContent:"space-evenly",
listStyle:"none"}}>
    <li>Microcopy

</li>
<div>&nbsp;</div><div>&nbsp;</div>
<li >
Taxonomy & Labeling</li>
<div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div>
<li>Chatbots</li>
<div>&nbsp;</div>
<li>User Research </li>
</ul>

<ul   style={{color:"white",display:'flex',justifyContent:"space-evenly",listStyle:"none"}}>
<li>
Content Style Guide
</li>
<li>User Testing
</li>
<li>Design Principles</li>
</ul>






</div>


</div>



</div>


{/* 2 */}

<div class="jumbotron py-4" id="jump" style={{margin:"0px",height:"750px"}}>
  <div className="row py-4 d-flex flex-md-row flex-column-reverse text-center " >
<div className="col-12 col-sm-5 py-4 align-content-center"  id="main-cortex-col1" >
 
<ScrollAnimation  animateIn="flipInX"><div><h1 className="py-4 text-center" id="copywriter" 
 style={{fontSize:"50px",color:"white"}}>Website Copywriting
  </h1></div>
  </ScrollAnimation>
  
  
 
  <hr class="my-2" />
 <ScrollAnimation animateIn="flipInX"> <p style={{fontSize:"16px",fontWeight:"bold",color:"white"}}>
   Your website is a dialogue with your audience. I capture the essence of your business and 
   communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the 
   perfect user journey online. Let me draw the map that guides users every step of the way from 
   discovery, to consideration, to convers</p>
 
</ScrollAnimation>
  <ul style={{color:"white",display:'flex',justifyContent:"space-evenly",listStyle:"none"}}>
  <li>Information </li><div>&nbsp;</div><div>&nbsp;</div>
  <li>Wireframes</li>
  <li>Competitor Analysis</li>

 </ul>



<ul style={{color:"white",display:'flex',justifyContent:"space-evenly",listStyle:"none"}}>
<li>
Content Style Guide
</li>
<li>User Testing
</li>
<li>Design Principles</li>
</ul>
</div>


<div className="col-12 col-sm-7 "  id="main-cortex-col2" >

<ScrollAnimation animateIn="flipInX"><img al="skd" src={require("./section2img2.svg")} /></ScrollAnimation>






</div>


</div>



</div>
{/* 2 */}



{/* section 3 */}

<div class="jumbotron py-4 m-0" id="jump" style={{height:"750px"}}>
  <div className="row py-4 d-flex flex-md-row flex-column-reverse text-center " >
<div className="col-12 col-sm-6 py-4 align-content-center"  id="main-cortex-col1" style={{color:"white"}}>
 <ScrollAnimation animateIn="flipInX" ><img alt="sjs" src={require("./section3img3.svg")}  /></ScrollAnimation>
 
  
  
 
  

</div>


<div className="col-12 col-sm-6  py-4"  id="main-cortex-col2">
<ScrollAnimation  animateIn="flipInX">
<h1 className="py-4 text-center" style={{color:"white",fontSize:'50px',textAlign:'left',marginLeft:'6px'}}>

Content Writing

</h1></ScrollAnimation>

<ScrollAnimation  animateIn="flipInX"><p className="py-2" style={{color:"white",fontSize:"15px",fontWeight:'bolder',
align:"justify"}}>Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.

Headlines & Taglines
</p></ScrollAnimation>

<ul  id="main-ul" style={{color:"white",display:'flex',justifyContent:"space-evenly",listStyle:'none'}}>
  <li>Headlines & Taglines
</li>
  <li>Content Strategy
</li>
  <li>Blogs & Articles</li>
  <li>Media</li>
</ul>

<ul style={{color:"white",display:'flex',justifyContent:"space-evenly",listStyle:"none"}}>
<li>
Content Style Guide
</li>
<li>User Testing
</li>
<li>Design Principles</li>
</ul>






</div>


</div>

<hr  style={{backgroundColor:"white"}}></hr>
<div className="py-4" style={{paddingTop:'150px'}}></div>
</div>




{/* section 3 */}
       </>
    )
}

export default Section2
