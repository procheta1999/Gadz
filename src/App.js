import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <hr></hr>
      <p class="line-1 anim-typewriter">Gadz</p>
        <center><h2 style={{fontSize:25}}>Gadget Reviews at Your Fingertips</h2></center>
<img src="https://media.giphy.com/media/3oKIPtaS9TtrmIzXRm/giphy.gif"></img>
<br></br>
<p>We, living in a technologically advanced world, need electronic gadgets in our day-to-day life. And with the ages passing by, technology is also getting advanced and our uses are increasing simultaneously. But , the prices of electronic gadgets increasing day by day, it is becoming impossible for many to buy an electronic gadget frequently. Thus, to improve user experience and durability, the companies are making it a aim to make their respective gadgets best in the market. This website focusses on the reviews of some necessary electronic gadgets, collected as per sources.</p>
<br></br>
<div className="container">  
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">
      <div className="item active">
       <center> <img src="https://images.unsplash.com/photo-1565797201241-da27b9ace18e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" width="100%" height="100%" ></img>
      </center></div>

      <div className="item">
        <center><img src="https://images.unsplash.com/photo-1554046862-054dbd07c8c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" width="100%" height="100%"></img>
      </center></div>
    
      <div className="item">
        <center><img src="https://images.unsplash.com/photo-1536704689578-8fff53d4dfd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"  width="100%" height="100%"></img>
   </center></div>
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

      </header>
      
    </div>
  );
}

export default App;
