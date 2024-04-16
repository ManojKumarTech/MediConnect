import React from "react";
import { database } from "../firebase/setup";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../images/apallo.jpg'
import Footer from "../components/Footer";
import Header from "../components/Header";


function Thome() {
  const nav = useNavigate();

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    signOut(database).then(value => {
      console.log(value, "Value");
      nav("/");
    });
  }

  return (
    <>

      <Header/>

      {/*Body */}
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: "24rem", height: "34.5rem", marginTop: "20px" }}>
          <div className="card-body">
            <img className="w-100" src="https://lh5.googleusercontent.com/p/AF1QipPQzNE8Zj3hbV-C2mFpLgqIXavPHfoygNKpY__P=w408-h269-k-no"></img>
            <div className="d-flex"></div>
            <h5 className="card-title">Apollo Hospital</h5>
            <p className="card-text">
              Apollo Hospitals, Greams Road, Chennai, is India's first corporate hospital
              inaugurated in 1983 by then Hon'ble President of India, Sri Zail Singh.
              Established by the Founder and Chairman of Apollo Hospitals Group Dr. Prathap C.
            </p>
            <a href="/order" className="btn btn-primary">
              View medicine
            </a>
          </div>
        </div>

        <div style={{ marginLeft: 100, marginTop: "20px" }}>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58797.71491744999!2d80.25506338518586!3d13.068333070913916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHospitals%20in%20chennai!5e0!3m2!1sen!2sin!4v1712993106821!5m2!1sen!2sin"
            width={750}
            height={550}
            style={{ border: '2px', color: "blue" }}
            loading="lazy"
            onClick={console.log([])}

          />
          
        </div>
      </div>

      {/*<form onSubmit={handleSubmit}>
        <button type="submit">Signout</button>
      </form>

      {/*Body end*/}
        <Footer/>
    </>
  );
}
export default Thome