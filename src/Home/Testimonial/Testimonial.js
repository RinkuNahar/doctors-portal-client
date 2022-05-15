import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png';
import TestimonialReview from './TestimonialReview';

const Testimonial = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'There have best services ever.I am so glad',
            img: people1
        },
        {
            _id: 2,
            name: 'Rinku Nahar',
            review: 'They give the best suggestion',
            img: people2
        },
        {
            _id: 3,
            name: 'Abir Jack',
            review: 'They are always on time',
            img: people3
        }
    ]

    return (
        <section className='mt-[84px] mx-16'>

            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl text-primary font-bold'>Testimonial</h3>
                    <h4 className=' text-3xl font-bolder mt-2'>What our patients Says</h4>
                </div>
                <div>
                    <img width="192px" height='156px' className='sm:w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36'>
                {
                    reviews.map(review => <TestimonialReview key={review._id}
                        review={review}
                    ></TestimonialReview>)
                }
            </div>
        </section>
    );
};

export default Testimonial;
