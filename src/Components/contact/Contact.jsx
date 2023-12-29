import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {
    const [showEmail, setShowEmail] = useState({bookings: false, art: false, jewelry: false});

    return (
        <div className="contactContainer">
            <section>
                <h1 className='contactTitle'>
                    <a className="contactAncor" onClick={() => setShowEmail({...showEmail, bookings: !showEmail.bookings})}>Bookings</a>
                </h1>
                {showEmail.bookings && <div className='email'>sheisaenes@gmail.com</div>}
            </section>
            <section>
                <h1 className='contactTitle'>
                    <a className="contactAncor" onClick={() => setShowEmail({...showEmail, art: !showEmail.art})}>Art Directions, Collaborations and Modeling</a>
                </h1>
                {showEmail.art && <div className='email'>sheisaenes@gmail.com</div>}
            </section>
            <section>
                <h1 className='contactTitle'>
                    <a className="contactAncor" onClick={() => setShowEmail({...showEmail, jewelry: !showEmail.jewelry})}>Jewelry</a>
                </h1>
                {showEmail.jewelry && <div className='email'>sheisaenes@gmail.com</div>}
            </section>
        </div>
    )
}
