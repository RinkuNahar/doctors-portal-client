import React from 'react';

const Service = ({ service }) => {

    const {name, slots} = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl mx-11">
            <div class="card-body">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600'>No Space Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length>1 ? 'spaces' : 'space'}Available</p>
                <div class="card-actions mx-auto">
                    <button disabled={slots.length === 0} class="btn btn-secondary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;