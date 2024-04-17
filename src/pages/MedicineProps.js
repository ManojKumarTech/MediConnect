import React from 'react';
import MedicineList from './MedicineList';
import Para from '../images/para.png';
import Ibu from '../images/ibu.png';
import Asp from '../images/asp.png';
import Amo from '../images/Amo.png';
import Footer from '../components/Footer';
import Header from '../components/Header';

function MedicineProps() {
    // Sample list of medicines
    const medicines = [
        {
            name: 'Paracetamol',
            price: '₹50',
            quantity: '10 tablets',
            manufacturer: 'ABC Pharmaceuticals',
            image: ''
        },
        {
            name: 'Ibuprofen',
            price: '₹70',
            quantity: '50 tablets',
            manufacturer: 'XYZ Pharmaceuticals',
            image: ''
        },
        {
            name: 'Aspirin',
            price: '₹30',
            quantity: 'per dozen',
            manufacturer: 'PharmaCorp',
            image: ''
        },
        {
            name: 'Amoxicillin',
            price: '₹100',
            quantity: '30 capsules',
            manufacturer: 'MediCo',
            image: ''
        },
        {
            name: 'Ciprofloxacin',
            price: '₹120',
            quantity: 'per dozen',
            manufacturer: 'HealthCare Inc.',
            image: 'path/to/ciprofloxacin-image.jpg'
        },
        {
            name: 'Lisinopril',
            price: '₹80',
            quantity: 'per dozens',
            manufacturer: 'PharmaDirect',
            image: 'path/to/lisinopril-image.jpg'
        },
        {
            name: 'Atorvastatin',
            price: '₹90',
            quantity: '40 tablets',
            manufacturer: 'MediPlus',
            image: 'path/to/atorvastatin-image.jpg'
        },
        {
            name: 'Levothyroxine',
            price: '₹60',
            quantity: '90 tablets',
            manufacturer: 'PharmaWorld',
            image: 'path/to/levothyroxine-image.jpg'
        },
        {
            name: 'Metformin',
            price: '₹40',
            quantity: 'per dozen',
            manufacturer: 'HealthMed',
            image: 'path/to/metformin-image.jpg'
        },
        {
            name: 'Simvastatin',
            price: '₹80',
            quantity: '50 tablets',
            manufacturer: 'MediCare',
            image: 'path/to/simvastatin-image.jpg'
        },
        {
            name: 'Omeprazole',
            price: '₹70',
            quantity: 'per dozen',
            manufacturer: 'PharmaGen',
            image: 'path/to/omeprazole-image.jpg'
        },
        {
            name: 'Prednisone',
            price: '₹110',
            quantity: '40 tablets',
            manufacturer: 'MediLife',
            image: 'path/to/prednisone-image.jpg'
        },
        {
            name: 'Amlodipine',
            price: '₹80',
            quantity: 'per dozen',
            manufacturer: 'PharmaNet',
            image: 'path/to/amlodipine-image.jpg'
        },
        {
            name: 'Gabapentin',
            price: '₹90',
            quantity: '90 capsules',
            manufacturer: 'MediHealth',
            image: 'path/to/gabapentin-image.jpg'
        },
        {
            name: 'Metoprolol',
            price: '₹70',
            quantity: '80 tablets',
            manufacturer: 'PharmaCo',
            image: 'path/to/metoprolol-image.jpg'
        },
        {
            name: 'Hydrochlorothiazide',
            price: '₹60',
            quantity: 'per dozen',
            manufacturer: 'HealthPharma',
            image: 'path/to/hydrochlorothiazide-image.jpg'
        },
        {
            name: 'Warfarin',
            price: '₹50',
            quantity: '50 tablets',
            manufacturer: 'MediCarePlus',
            image: 'path/to/warfarin-image.jpg'
        },
        {
            name: 'Fluoxetine',
            price: '₹100',
            quantity: '30 capsules',
            manufacturer: 'PharmaDirect',
            image: 'path/to/fluoxetine-image.jpg'
        },
        {
            name: 'Albuterol',
            price: '₹80',
            quantity: 'per dozen',
            manufacturer: 'HealthCare Inc.',
            image: 'path/to/albuterol-image.jpg'
        },
        {
            name: 'Citalopram',
            price: '₹70',
            quantity: '90 tablets',
            manufacturer: 'MediCo',
            image: 'path/to/citalopram-image.jpg'
        }
    ];


    return (
        <div className="App">
            <Header/>
            <h1>Medicine List</h1>
            <MedicineList  medicines={medicines} />

            <Footer/>
        </div>
    );
}

export default MedicineProps;
