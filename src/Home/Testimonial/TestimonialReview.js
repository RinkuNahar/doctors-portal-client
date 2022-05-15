import React from 'react';
import './Testimonial.css';

const TestimonialReview = ({review}) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl testimonial-container">
        <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates quo incidunt harum minus mollitia!</p>
            <div className="flex items-center">
                <div className="avatar mt-5">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5 ">
                        <img src={review.img} alt=""/>
                    </div>
                </div>
                <div>
                    <h4 className='text-xl'>{review.name}</h4>
                    <p>{review.location}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default TestimonialReview;