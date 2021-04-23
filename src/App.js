import React from 'react';
import './style/index.css';
import Navbar from './nav_header';
import Page from './Page';
import Container1 from './Container1';
import Container2 from './Container2';
import Footer from './Footer';
import SliderImg from './SliderImg'

function App() {
  return (
<div className="App">
 
<Navbar/>

  <Page/>
  

  <Container1/>

  <h1>Our Previous Works </h1>

  <SliderImg/>
<div className="se-v">
  <Container2 name="Web Development" desc="We provide Business and E-commerce websites at low cost and in time delivery with immersive UI.
Custom designs from clients are also accepted.We provide both deployment and maintainence .Professional pre-designed websites are alo available.
"  isrc="https://dbuglab.com/dbuglab_files/web-development.png"/>


<Container2 name="App Development" desc="Create App for your Business and take your marketing services to next level
Android and IOS App Development with fluid UI experience and design of your own creativity.
Get your App soon and start your digital services with ease.
" isrc="https://www.infocratsweb.com/wp-content/uploads/2018/03/mobile-app-development.png"/>



<Container2 name="Software Development" desc="Make Software to Manage your Employees and Business Accounts.
Visualise your Business impact with our Software tools and Specialisations.Get Your own software and be a step
ahead of your Competitors.
" isrc="https://freepngimg.com/thumb/software_development/7-2-software-development-png-image.png
"/>
</div>
<br></br>



<Footer/>

  </div>


);

}

export default App;
