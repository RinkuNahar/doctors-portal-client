import React from 'react';
import watch from '../../../src/assets/icons/clock.svg';
import location from '../../../src/assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg'
import './Info.css';

const Info = () => {
    return (
        <div className='ml-16 my-12 info'>
            <div class="card container w-96 bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary info-container">
                <div className='info-image'>
                    <img className='my-7 mx-3' src={watch} alt="" />
                </div>
                <div class="card-body info-body">
                    <h2 class="card-title text-white">Opening Hours</h2>
                    <p className='text-white'>We are always open. 24/7 Hours</p>
                </div>
            </div>

            <div class="card container w-96 bg-base-100 shadow-xl bg-accent  info-container">
                <div className='info-image'>
                    <img className='my-7 mx-3' src={location} alt="" />
                </div>
                <div class="card-body info-body">
                    <h2 class="card-title text-white">Visit Our Location</h2>
                    <p className='text-white'>Lalbagh, J.N.Shaha Road, Posta, Dhaka</p>
                </div>
            </div>

            <div class="card container w-96 bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary info-container">
                <div className='info-image'>
                    <img className='my-7 mx-3' src={phone} alt="" />
                </div>
                <div class="card-body info-body">
                    <h2 class="card-title text-white">Contact Us Now</h2>
                    <p className='text-white'>+8801711111222</p>
                </div>
            </div>
        </div>
    );
};

export default Info;
