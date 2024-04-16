import React, { useState, useEffect } from 'react';
import '../style/orderPlaced.css';
import { Link } from 'react-router-dom';


function OrderPlacedPage() {
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        // Hide the message after 5 seconds
        const timer = setTimeout(() => {
            setShowMessage(true);
        }, 50000);

        // Cleanup function to clear the timer
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="order-placed-container">
            {showMessage && (
                <div className="order-placed-message">
                    <h1>Order Placed!</h1>
                    <p>Your order has been successfully placed.</p>
                    <Link to="/home" className="go-to-home-button">
                        Go to Home
                    </Link>
                </div>
            )}
        </div>
    );
}

export default OrderPlacedPage;
