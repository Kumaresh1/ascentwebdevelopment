import React from 'react'
import './style/container2.css'


import website_design from './images/website_design.jpg'
import mobileappdevelopment from './images/mobile-app-development.png'
import software_development from './images/software_development.png'


function Container2(props) {

    var imagesrc;
    if(props.isrc==="1"){
        imagesrc=website_design;
    }else if(props.isrc==="2"){
        imagesrc=mobileappdevelopment;
    }else if(props.isrc==="3"){
        imagesrc=software_development;
    }
  
    return (
       <div id="t-con">
<div className="i-t1" id="services">
<img src={imagesrc}

width="130px" height="100px"  alt={props.name+"icon"}
	/>
    <div className="t-hv">
<h1 id="t-wb">{props.name}</h1>

<p id="provider" style={{}}>{props.desc}</p>

</div>

</div>

</div>
         )
}



export default Container2


