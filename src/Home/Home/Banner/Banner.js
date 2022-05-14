import React from 'react';
import chair from '../../../../src/assets/images/chair.png';
import './Banner.css';
import bg from '../../../../src/assets/images/bg.png'
const Banner = () => {
    return (
        <div style={{ 
            backgroundImage: `url(${bg})` 
          }} class="hero min-h-screen banner-container">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img className='banner-img' src={chair} />
          <div>
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">GET STARTED</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;

