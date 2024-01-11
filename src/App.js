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
    
    <h1 id="logo">MediConnect<br></br></h1>
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
          <br></br>
          <button type="button" className="btn btn-success">SUBMIT</button>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
