import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from './BookingModal';
import Service from './Service';


const AvailableAppointment = ({ date }) => {

    // const[services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
 console.log(treatment);
    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://salty-ravine-99668.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
 
    // const formattedDate = format(date, 'PP');
    // useEffect(() => {
    //     fetch(`https://salty-ravine-99668.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate]);

    return (
        <div>
            <h2 className='text-primary text-xl text-center mt-16 font-bold'>Available Appointments on {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service} treatment={treatment} setTreatment={setTreatment}></Service>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment} 
            date={date}
             setTreatment={setTreatment}
             refetch = {refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;