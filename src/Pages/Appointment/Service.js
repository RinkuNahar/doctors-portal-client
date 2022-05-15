import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-11">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600'>No Space Available</span>
                }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}Available</p>
                <div class="card-actions mx-auto">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(service)} for="booking-modal" class="btn modal-button btn-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;