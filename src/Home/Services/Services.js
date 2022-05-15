import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import treatment from '../../assets/images/treatment.png';

const Services = () => {
    return (
        <div>
            <div>
                <h2 className='text-center text-xl font-bold text-primary' >OUR SERVICES</h2>
                <h4 className='text-center text-2xl font-bolder '>Services We Provide</h4>
            </div>

            <div className='services-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ml-16 mt-12 '>
                <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5">
                    <figure><img className='mt-5' src={fluoride} alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="text-xl font-bold">Fluoride Treatment</h2>
                        <p>Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. </p>
                    </div>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5">
                    <figure><img className='mt-5' src={cavity} alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="text-xl font-bold">Cavity Filling</h2>
                        <p>On average, you can expect a metal filling to last for about 15 years before needing to be replaced, but the length of time can vary based on several factors, such as if you grind or clench your teeth. Tooth-colored fillings are made from a mixture of fine glass and plastic particles.</p>
                    </div>
                </div>

                <div class="card card-compact w-96 bg-base-100 shadow-xl mt-5">
                    <figure><img className='mt-5' src={whitening} alt="Shoes" /></figure>
                    <div class="card-body text-center">
                        <h2 class="text-xl font-bold">Teeth Whitening</h2>
                        <p>How much does it cost to whiten teeth?
                            Having your teeth whitened in-office will cost approximately $600, and while this is significantly more money than the cost of take-home kits or other teeth whitening products, such as gels, gums, or whitening toothpastes, which can range from $5 to $50.</p>
                    </div>
                </div>

            </div>

            <div>
                <div class="hero min-h-screen mt-10">
                    <div class="hero-content flex-col lg:flex-row md:flex-row">
                        <img width='458px' height='576px' src={treatment} />
                        <div className=' pl-16'>
                            <h1 class="text-5xl font-bold pl-16">Exceptional Dental Care, On Your Terms</h1>
                            <p class="py-6 pl-16">It's a special branch of dentistry where doctor deals with smile. Total smile will change depending of DSD software and try on pt mouth. It will change total smile of a patient. Specially actor ,actress , fasion model, news presenter , cabin crews and vvip did this treatment for looking handsome. Now a days many peoples are doing this treatment due to demand good smile. Doctors are here already treat more then 2000 in last 10 years.</p>
                            <button class="btn btn-primary ml-16 text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;





