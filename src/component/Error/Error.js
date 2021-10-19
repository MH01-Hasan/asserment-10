import React from 'react';
import { NavLink } from 'react-router-dom';
import error from '../../image/error.jpg'
import './Error.css'

const Error = () => {
    const style={
     paddingTop: "15px",
    textDecoration: 'none',
    fontSize: '15px',
    fontFamily: 'none',
    backgroundColor: '#11e1e1',
    padding:' 5px 34px',
    borderRadius:" 10px",
    marginTop: "32px",
        };
    
    return (
        <div >
            <img className='w-100' src={error}alt="" />
            <div className='back-home'>
            <NavLink to='/home' style={style}>Back to Home Page</NavLink>
            </div>
            
        </div>
    );
};

export default Error;