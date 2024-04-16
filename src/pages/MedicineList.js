import React from 'react';
import '../style/MedicineList.css'; 

function MedicineList({ medicines }) {
    return (
        <> <div className="medicine-list-container">
            {medicines.map((medicine, index) => (
                <div key={index} className="medicine-card" style={{ backgroundImage: `url(${medicine.image})` }}>
                    <div className="medicine-content">
                        <h2>{medicine.name}</h2>
                        <p>Price: {medicine.price}</p>
                        <p>Quantity: {medicine.quantity}</p>
                        <p>Manufacturer: {medicine.manufacturer}</p>
                    </div>
                </div>
            ))}
        </div>
        </>

    );
}

export default MedicineList;
