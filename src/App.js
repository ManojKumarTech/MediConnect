import logo from './logo.svg';
import react from 'react';
import './App.css';

function App() {
  return (
    
    <>
      <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossOrigin="anonymous"
  />

  {/* NavBar */}
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <header className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'lightgreen'}}>
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
    <div className="main">
      <div className="sub-main">
      
        <div>

          <h1 id="login">login</h1>
          <br></br>
          <h5 id="pass">Email</h5>
          <input id="input"type="text" placeholder="Enter Email id"></input>
          <br></br>
          <br></br>
          <h5 id="pass">Password</h5>
          <input id="input"type="password" placeholder="Enter Password"></input><br></br>
          <h6 id="fp" >Forget Password ?</h6>
          <br></br>
          
          <button type="button" className="btn btn-success">SUBMIT</button>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
