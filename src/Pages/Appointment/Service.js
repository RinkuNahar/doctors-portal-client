import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-11">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600'>No Space Available</span>
                }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}Available</p>
                <div className="card-actions mx-auto">
                    <label disabled={slots.length === 0} onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn modal-button btn-secondary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;