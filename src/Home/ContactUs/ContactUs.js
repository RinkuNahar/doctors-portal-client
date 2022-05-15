import React from 'react';
import './ContactUs.css';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className='mt-16 mb-2 contact-home' style={{ backgroundImage: `url(${appointment})` }}>
            <div >
                <h3 className='text-xl font-bold contact-headline text-center pt-12'>Contact Us</h3>
                <h4 className=' text-2xl font-bolder mt-2 text-center text-white'>Make An Appointment Today</h4>
            </div>

            <div className='mx-[590px] contact-container'>
                <input type="text" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs mb-5 mt-10 contact-input" />
                <br />
                <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs mb-5 contact-input" />
                <br />
                <input type="text" placeholder="Your Message" className="input input-bordered input-lg w-full max-w-xs contact-input" />
                <button className="btn btn-primary  mt-10  text-white align-middle mx-16 mb-5">Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;
