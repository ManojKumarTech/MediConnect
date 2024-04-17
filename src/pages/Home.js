import React from 'react';
import '../style/Home.css'; // Importing CSS file for styling
import { useNavigate } from 'react-router-dom';

import hos from '../images/hospital.png'
import medi from '../images/Medicine.png'
import feedback from '../images/feedback.png'
import Footer from '../components/Footer';
import Header from '../components/Header';

function HomePage() {
    const nav = useNavigate()

    const medicine = () => nav('/')

    return (
        <>
            <Header/>
            
            <div className="home-page-container">
                <div className="card" style={{ width: "17rem" }}>
                    <img src={hos} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Hospital Location</h5>
                        <p className="card-text">
                            Find the best hospitals near by You! 
                        </p>
                        <br />
                        <a href="/hospitals" className="btn btn-primary">
                            Show Hospitals
                        </a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={medi} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Basic Medicines</h5>
                        <p className="card-text">
                            Here are the simple medicine which you can order easily! 
                        </p>
                        <br />
                        <a href="/medicines" className="btn btn-primary">
                            Show Medicene
                        </a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={feedback} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Give FeedBack!</h5>
                        <p className="card-text">
                            Give us more feedbacks to improve our Quality maximum!
                        </p>
                        <a href="feedback" className="btn btn-primary">
                            Click Here
                        </a>
                    </div>
                </div>
            </div>

            <Footer/>

        </>

    );
}

export default HomePage;
