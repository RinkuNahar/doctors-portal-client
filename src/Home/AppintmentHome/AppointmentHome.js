import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const AppointmentHome = () => {
    return (
        <div>
           <section className=' flex justify-center items-center mt-[100px]' style={{backgroundImage: `url(${appointment})`}}>
               <div className='flex-1 hidden lg:block'>
               <img className='mt-[-150px]' src={doctor} alt="" />
               </div>

               <div  className='flex-1 ' >
                   <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                   <h4 className=' text-3xl font-bolder mt-5 text-white'>Make An Appointment Today</h4>
                   <p className='text-white mt-7'>Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity, commonly in the dentition as well as the oral mucosa, and of adjacent and related structures and tissues, particularly in associated maxillofacial area.The field of dentistry or dental medicine includes teeth as well as other aspects of the craniofacial complex including the temporomandibular joint and other supporting, muscular, lymphatic, nervous, vascular, and anatomical structures. The practitioner is called a dentist.</p>
                   <button class="btn btn-primary  mt-10 text-white">Get Started</button>
               </div>
           </section>
        </div>
    );
};

export default AppointmentHome;