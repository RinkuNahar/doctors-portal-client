import React from 'react';
import AppointmentHome from '../AppintmentHome/AppointmentHome';
import ContactUs from '../ContactUs/ContactUs';
import Info from '../Info/Info';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Info></Info>
          <Services></Services>
          <AppointmentHome></AppointmentHome>
          <Testimonial></Testimonial>
         <ContactUs></ContactUs>
        </div>
    );
};

export default Home;