import React from "react";




function Navbar(){

 

    return(
        <>
    <div id="display">
    <img height="50" width="50" src="./mouse.jpg" />
    <marquee id="m1" onMouseOver="stopM()" onMouseOut="startM()" scrollamount="2" direction="up"  loop="true" width="60%">
    <center>
    <p id="text">
      Welcome to Ai reality
    </p>
    </center>
    </marquee>
    </div>

         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" >Ai virtual mouse</a>

      



    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="About.js">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mouse detection</a>
        </li>
       
         
    
      
     
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" action ="Home">Search</button>
      </form>
    </div>
  </div>
</nav>



        </>

    );
}
export default Navbar;