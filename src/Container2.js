import React from 'react'
import './style/container2.css'


function Container2(props) {
  
    return (
       <div id="t-con">
<div className="i-t1" id="services">
<img src={props.isrc}

width="130px" height="100px"  alt="icon"
	/>
    <div className="t-hv">
<h2 id="t-wb">{props.name}</h2>

<p id="provider" style={{}}>{props.desc}</p>

</div>

</div>

</div>
         )
}



export default Container2


