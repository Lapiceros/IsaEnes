import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {
    const [showEmail, setShowEmail] = useState({
        artEnquiries: false,
        bookings: false
        // bookings2: false,
    });

    return (
        <div className="contactContainer">
            <section class="contactMedia">
                <a>Instagram</a>
                <hr/>
                <a>Facebook</a>
                <hr/>
                <a>Soundcloud</a>
                <hr/>               
                <a>Resident Advisor</a>
            </section>
            <section>
                <h2>
                    <a className="contactAncor" onClick={() => setShowEmail({...showEmail, artEnquiries: !showEmail.artEnquiries})}>Art Enquiries</a>
                </h2>
                {showEmail.artEnquiries && <div className='email'>sonofawitch.club@gmail.com</div>}
            </section>
            <section>
                <h2 className='contactTitle'>
                    <a className="contactAncor" onClick={() => setShowEmail({...showEmail, bookings: !showEmail.bookings})}>Bookings</a>
                </h2>
                {showEmail.bookings && <div className='email'>sheisaenes@gmail.com</div>}
            </section>
            <section>
                <h2>
                    <a className="contactAncor" onClick={() => setShowEmail({...showEmail, bookings2: !showEmail.bookings2})}>Booking Netherlands</a>
                </h2>
                {showEmail.bookings2 && <div className='email'>info@scprodparisgang.com</div>}
            </section>
        </div>
    )
}



