import React from "react";
import { database } from "../firebase/setup";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import '../images/apallo.jpg'


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

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />

      {/* NavBar */}

      <header className="navbar navbar-expand-lg navbar-light bg-secondary" >
        <a className="navbar-brand" href="#" style={{ color: "green", fontSize: "30px" }}>
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
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" style={{ color: "green", fontSize: "18px" }}>
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "green", fontSize: "18px" }}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{ color: "green", fontSize: "18px" }}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" style={{ color: "green", fontSize: "18px" }} >
                Signout
              </a>
            </li>
          </ul>
          {/*<button onClick={handleSubmit}>Mobile</button>*/}
        </div>
      </header>
      {/* NavBar */}

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
            <a href="#" className="btn btn-primary">
              View medicine
            </a>
          </div>
        </div>

        <div style={{ marginLeft: 100, marginTop: "20px" }}>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248767.5435103323!2d79.96883869171141!3d13.036125802402088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266352b868e19%3A0x6ae71b3067534db1!2sApollo%20Spectra%20Hospital!5e0!3m2!1sen!2sin!4v1707372413988!5m2!1sen!2sin"
            width={750}
            height={550}
            style={{ border: '2px', color: "blue" }}

            loading="lazy"

          />
        </div>
      </div>

      {/*<form onSubmit={handleSubmit}>
        <button type="submit">Signout</button>
      </form>

      {/*Body end*/}


      {/* Footer */}
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks :) ❤️</span>
          </div>
          {/* Left */}
          {/* Right */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  MediConnect
                </h6>
                <p>
                  the Smart Pharmacy Finder & Medication Ordering System represents a significant advancement in healthcare technology, improving accessibility, efficiency, and patient satisfaction in managing medication needs.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset">
                    medicinal Services

                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    general healthcare
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    location display
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    ordering facilities
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3" /> Chennai,AnnaNagar, India
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  mediconnect@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> +91 98765 43210
                </p>
                <p>
                  <i className="fas fa-print me-3" /> +91 91234 56780
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Copyright:
          <a className="text-reset fw-bold" href="">
            MediConnect
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}
export default Thome