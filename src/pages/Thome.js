import React from "react";

function Thome() {
    return(
        <>
      

  {/* NavBar */}
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <header className="navbar navbar-expand-lg navbar-light bg-secondary" >
    <a className="navbar-brand" href="#" style={{color:"green",fontSize:"30px"}}>
      MediConnect
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#" style={{color:"green",fontSize:"18px"}}>
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"green",fontSize:"18px"}}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"green",fontSize:"18px"}}>
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style={{color:"green",fontSize:"18px"}} >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </header>
  {/* NavBar */}
   
    </>

    )
}

export default Thome;