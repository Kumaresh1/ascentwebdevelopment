import React from 'react'
import  './style/navbarcss.css'
import logo from './images/logo.png'
import nicon from './images/navbar.png'


function myfunc(){
   // console.log(document.getElementById("p-im-g"));
    if(document.getElementById("s-ul").style.display==="block"){

        document.getElementById("s-ul").style.display="none";


    }
    else{
        document.getElementById("s-ul").style.display="block";

    }
    
}

export default function nav_header() {
    return (
        <div className="container">
            <div className="logo">         
<img src={logo} 
            className="l_img" alt="logo"
            /></div>
 <img src={nicon} width="30px" height="30px" id="p-im-g" onClick={myfunc} alt="icon"
 />
            <nav className="Navbar">
           
            
  <ul id="s-ul">
  <a href="/" id="h-m"><li>Home</li></a>
  <a href="#services"><li>Services</li></a>
  <a href="#about"><li>About</li></a>
  <a href="#contact"><li>Contact Us</li></a>
 
    </ul>
            </nav>
 <div className="res-n">
     
 
 
     
     </div>      
       
       
        </div>
    )
}
