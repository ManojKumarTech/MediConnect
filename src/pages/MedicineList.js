import React from 'react';
import '../style/MedicineList.css'; 
import { Link, useNavigate } from 'react-router-dom';

function MedicineList({ medicines }) {
    const nav = useNavigate()
    return (
        <> <div  className="medicine-list-container">
            {medicines.map((medicine, index) => (
                <div   key={index} className="medicine-card" style={{ backgroundImage: `url(${medicine.image})`,cursor:'pointer' }}>
                    <div  className="medicine-content">
                        <h2>{medicine.name}</h2>
                        <p>Price: {medicine.price}</p>
                        <p>Quantity: {medicine.quantity}</p>
                        <p>Manufacturer: {medicine.manufacturer}</p>
                        <Link to="/order" className="go-to-home-button">
                        Order
                    </Link>
                    </div>
                </div>
            ))}
        </div>
        </>

    );
}

export default MedicineList;
