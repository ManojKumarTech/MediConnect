import React, { useState } from 'react';
import '../style/orderingpage.css';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

import { db } from '../firebase/setup';
import { addDoc, collection } from 'firebase/firestore';
import Footer from '../components/Footer';


function MedicineOrderingPage() {
    // Sample list of medicines


    const [Medi, setMedi] = useState("")
    const [Quan, setQuan] = useState("")
    const [Ads, setAds] = useState("")
    const ref = collection(db, 'orders')

    async function AddOrder() {
        setMedi(medicines)
        try {
            await addDoc(ref, {
                Medicine: Medi,
                Quantity: Quan,
                Address: Ads,

            })
            console.log(Medi)

        } catch (err) {
            console.error(err)
        }
    }




    const medicines = [
        { value: "paracetamol", label: "Paracetamol" },
        { value: "ibuprofen", label: "Ibuprofen" },
        { value: "aspirin", label: "Aspirin" },
        { value: "antacid", label: "Antacid" },
        { value: "antihistamine", label: "Antihistamine" },
        { value: "Amoxicillin", label: "Amoxicillin" },
        { value: "Ciprofloxacin", label: "Ciprofloxacin" },
        { value: "Lisinopril", label: "Lisinopril" },
        { value: "Atorvastatin", label: "Atorvastatin" },
        { value: "Levothyroxine", label: "Levothyroxine" },
        { value: "Metformin", label: "Metformin" },
        { value: "Simvastatin", label: "Simvastatin" },
        { value: "Omeprazole", label: "Omeprazole" },
        { value: "Prednisone", label: "Prednisone" },
        { value: "Amlodipine", label: "Amlodipine" },
        { value: "Gabapentin", label: "Gabapentin" },
        { value: "Metoprolol", label: "Metoprolol" },
        { value: "Hydrochlorothiazide", label: "Hydrochlorothiazide" },
        { value: "Warfarin", label: "Warfarin" },
        { value: "Fluoxetine", label: "Fluoxetine" },
        { value: "Albuterol", label: "Albuterol" },
        { value: "Citalopram", label: "Citalopram" }
    ];
    const nav = useNavigate()
    return (
        <>

            <Header />
            <div className="medicine-ordering-container">
                <h1>Medicine Ordering</h1>
                <form className="order-form">
                    <div className="form-group">
                        <label htmlFor="medicineName">Select Medicine:</label>
                        <Select options={medicines} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity:</label>
                        <input onChange={(e) => setQuan(e.target.value)} type="number" id="quantity" name="quantity" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Delivery Address:</label>
                        <textarea onChange={(e) => setAds(e.target.value)} id="address" name="address" rows="4"></textarea>
                    </div>

                </form>
                <center><button onClick={() => { AddOrder(); nav('/orderplaced') }}>Submit</button> </center>


            </div>

            <Footer />

        </>
    );
}

export default MedicineOrderingPage;
