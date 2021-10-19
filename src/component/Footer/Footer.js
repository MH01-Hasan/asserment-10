import React from 'react';
import './Footer.css'
import logo from '../../image/covid2-footer-logo.png'
import { Table } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='container footer-fild'>
           <div className='row '>
               <div className='col-lg-4 col-sm-6 footer-1st-sel'>
                   <img src={logo} alt="" />
                   <p className='paragraph'>Pain is the most common complaint among those who have runner’s knee sometimes the pain</p>
                   <i className="fab fa-facebook fav-icon"></i>
                   <i className="fab fa-twitter fav-icon"></i>
                   <i className="fab fa-linkedin-in fav-icon"></i>
                   <i className="fab fa-instagram fav-icon"></i>

               </div>
               <div className='col-lg-4 col-sm-6 footer-2st-sel'>
                   <h3>Useful Links</h3>
                   <ul>
                       <li>About</li>
                       <li>Services</li>
                        <li>Doctors</li>
                       <li> Appoinment</li>
                       <li> Pricing</li>
                        <li>Contact</li>
                   </ul>

               </div>
               <div className='col-lg-4 col-sm-6 '>
                   
                   <div className='table-fild'>
                   <h3 className='footer-3dheading'>We’re Available</h3>
                   <Table striped bordered hover >
                    <tbody className='table-body' >
                        <tr >
                        
                        <td>Monday:</td>
                        <td>08.00 - 10.00</td>
                       
                        </tr>
                        <tr className='Tuesday'>
                        <td>Tuesday :</td>
                        <td>Free Day</td>
                        </tr>
                        <tr>
                        <td>Wednesday:</td>
                        <td>08.00 - 10.00</td>
                        </tr>
                        <tr>
                        <td>Thursday:</td>
                        <td>08.00 - 10.00</td>
                        </tr>
                        <tr>
                        <td>Friday :</td>
                        <td>09.00 - 07.00</td>
                        </tr>
                        <tr className='close'>
                        <td>Sat & Sun:</td>
                        <td>Closed</td>
                        </tr>
                    </tbody>
            </Table>

                   </div>

               </div>

           </div>
        </div>
    );
};

export default Footer;