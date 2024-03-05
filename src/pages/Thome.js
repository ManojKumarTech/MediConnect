import React from "react";
import { database } from "../firebase/setup";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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

      {/* NavBar */}
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
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
        <div className="collapse navbar-collapse" id="navbarNav">
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
              <a className="nav-link" c style={{ color: "green", fontSize: "18px" }} >
                Signout
              </a>
            </li>
          </ul>
          <button onClick={handleSubmit}>Mobile</button>
        </div>
      </header>
      {/* NavBar */}

      <div style={{ marginTop: 30, marginLeft: 20 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248767.5435103323!2d79.96883869171141!3d13.036125802402088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266352b868e19%3A0x6ae71b3067534db1!2sApollo%20Spectra%20Hospital!5e0!3m2!1sen!2sin!4v1707372413988!5m2!1sen!2sin"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>

      <form onSubmit={handleSubmit}>
        <button type="submit">Signout</button>
      </form>
    </>
  );
}
export default Thome