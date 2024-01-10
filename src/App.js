import logo from './logo.svg';
import react from 'react';
import './App.css';

function App() {
  return (
    
    <>
    <h1 id="logo">MediConnect<br></br></h1>
    <div className="main">
      <div className="sub-main">  
      
        <div>
          <h1 id="login">Login</h1>
          <h5 id="pass">Email</h5>
          <input id="input"type="text" placeholder="Enter Email id"></input>
          <h5 id="pass">Password</h5>
          <input id="input"type="password" placeholder="Enter Password"></input><br></br>
          <h6 id="fp" >Forget Password ?</h6>
          <button id="submit_B"type="submit">submit</button>
          </div>
      </div>
    </div>
    </>
  );
}

export default App;
