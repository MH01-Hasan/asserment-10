import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const {bookingid}=useParams();
    const[service,setService] = useState({})
     useEffect(()=>{
    fetch('/doctor.json')
    .then(res => res.json())
    .then(data =>
        {
            const singleservice=data.find(d=>d.id==bookingid)
            setService(singleservice)
        })
},[bookingid]);

    return (
        <div className=''>
            <div className='row container'>
                <div className='col-lg-6 col-sm-12 p-3'>
                    <div>
                        <img src={service.img} className='w-100 img-fluid image' alt="" />
                    </div>

                </div>
                <div className='col-lg-6 col-sm-12 p-3 '>
                    <h1 className='detail-name'>Name : {service.dispalyName}</h1>

                    <h6 className='Description'>{service.description}</h6>

                </div>

            </div>

        </div>
    );
};

export default Booking;