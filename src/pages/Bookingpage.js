import React, { useState } from 'react';
import '../style/orderingpage.css';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';


function MedicineOrderingPage() {
    // Sample list of medicines
    const medicines = [
        { value: 'paracetamol', label: 'Paracetamol' },
        { value: 'ibuprofen', label: 'Ibuprofen' },
        { value: 'aspirin', label: 'Aspirin' },
        { value: 'antacid', label: 'Antacid' },
        { value: 'antihistamine', label: 'Antihistamine' }
    ];
        const nav =useNavigate()
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

            <div className="medicine-ordering-container">
                <h1>Medicine Ordering</h1>
                <form className="order-form">
                    <div className="form-group">
                        <label htmlFor="medicineName">Select Medicine:</label>
                        <Select options={medicines} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Delivery Address:</label>
                        <textarea id="address" name="address" rows="4"></textarea>
                    </div>
                    
                </form>
                <div style={{textAlign:'center'}}><button onClick={nav('/orderplaced')} type="submit">Order Now</button></div>
                
            </div>

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

export default MedicineOrderingPage;
