import React,{useEffect,useState} from 'react'
import '../style/orderPlaced.css';
import { Link } from 'react-router-dom';

function FeedbackSubmited() {

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
        <div>
            <div className="order-placed-container">
                {showMessage && (
                    <div className="order-placed-message">
                        <h1>FeedBack Submited!</h1>
                        <p>Thanks for your feedback</p>
                        <Link to="/home" className="go-to-home-button">
                            Go to Home
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default FeedbackSubmited
