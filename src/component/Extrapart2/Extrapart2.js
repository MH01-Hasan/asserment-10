import React from 'react';
import'./Extrapart2.css'
import doctor from '../../image/doctor.jpg'

const Extrapart2 = () => {
    return (
        <div className='container'>
           <div className='row  mt-5 '>
               <div className='col-lg-6 col-sm-12 p-3'>
                   <p className='covid-19'>THE SYMPTOMS OF COVID-19</p>
                   <h1>WHAT ARE THE SYMPTOMS OF COVID-19</h1>
                  
                            <div>
                                <div className='d-flex p-2'>
                                    <hr className='tag-hr'/> <h4>HIGH FEVER</h4>
                                    </div>
                                <p>A fever is a high body temperature. A temperature of up to 38.9°C (102°F) can be helpful because it helps the body fight infection.</p>
                            </div>
                            <div>
                            <div className='d-flex p-2'>
                              <hr className='tag-hr'/><h4>CONTINUOUS COUGH</h4>
                                    </div>
                               
                                <p>Coughing is a routine bodily function, but when it lasts for an extended time, it can get in the way of everyday life and be worrying.</p>
                          </div>
                            <div>
                            <div className='d-flex p-2'>
                            <hr className='tag-hr'/> <h4 >SHORTNESS OF BREATH</h4>
                                    </div>

                           
                                <p>A fever is a high body temperature. A temperature of up to 38.9°C (102°F) can be helpful because it helps the body fight infection.</p>
                            </div>
               </div>

               <div className='col-lg-6 col-sm-8'>
                   <div><img className='w-100 img-fluid' src={doctor} alt="" /></div>

               </div>

           </div>
        </div>
    );
};

export default Extrapart2;