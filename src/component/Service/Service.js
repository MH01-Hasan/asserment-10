import React, { useEffect, useState } from 'react';
import ServiceData from '../ServiceData/ServiceData';
import './Service.css'

const Service = () => {
    const[doctor,setDoctor] = useState([])
    

 useEffect(()=>{
    fetch('./doctor.json')
    .then(res => res.json())
    .then(data => setDoctor(data))
},[]);

    return (
        <div className='container' >
            <h1 className='service'>Service</h1>
           <div className='row '>
           {
               doctor.map(data=> <ServiceData data={data}
               key={data.id}>

               </ServiceData>)

        
            }
           </div>
           
        </div>
    );
};

export default Service;