import React, { useState } from 'react'
import '../style/orderingpage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '../firebase/setup';
import { addDoc, collection } from 'firebase/firestore';

function FeedBack() {

    const nav = useNavigate()
    const [feed,setFeedback]=useState("")
    const ref = collection(db,'feedback')

    async function AddFeedBack() {
        try {
            await addDoc(ref, {
                feedback: feed,
            })
            console.log(feed)
            
        } catch (err) {
            console.error(err)
        }
    }
    
    return (
        <div>
            <Header/>
            <div className="medicine-ordering-container">
                <h1>Give FeedBack!</h1>
                <form className="order-form" >
                    
                    
                    <div className="form-group">
                        <label htmlFor="address">Here</label>
                        <textarea onChange={(e)=>setFeedback(e.target.value)} id="address" name="address" rows="4"></textarea>
                    </div>

                </form>
                <center><button onClick={()=>{AddFeedBack();nav('/feedbacksubmited')}}>Submit</button> </center> 
                
                


            </div>
            <Footer/>
        </div>
    )
}

export default FeedBack
