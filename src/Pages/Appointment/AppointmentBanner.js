import React, { useState } from 'react';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {

    const[date, setDate] = useState(new Date());

    return (
        <div style={{ 
            backgroundImage: `url(${bg})` 
          }} className="hero min-h-screen banner-container">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className='banner-img' src={chair} />

          <div>
          <DayPicker
           mode="single"
           selected={date}
           onSelect={setDate}
          />
          <p>You have selected:{format(date,'PP')}</p>
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;