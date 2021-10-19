import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Extrapart1.css'
import hand1 from '../../image/hand1.jfif'
import hand2 from '../../image/hand3.jfif'
import hand3 from '../../image/hand4.png'
import hand4 from '../../image/hand5.jpg'

const Extrapart1 = () => {
    return (
        <div>
            <div className='row p-5'>
                <div className='col-lg-6 col-sm-12 '>
                    <h1 className='hand-wash'>HOW TO WASH HANDS PROPERLY</h1>

                </div>
                <div className='col-lg-6 col-sm-12 p-3'>
                    <hr/>

                    <p className='protect' >Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local public health agency. Clean your hands often. Use soap and water, or an alcohol-based hand rub.</p>

                </div>

                <div  className='container'>
                <Row>
                <Col xs={6} md={3}>
                <img  className='w-100 img-fluid'src={hand1} alt="" />
                </Col>
                <Col xs={6} md={3}>
                <img  className='w-100 img-fluid'src={hand2} alt="" />
                </Col>
                <Col xs={6} md={3}>
                <img  className='w-100 img-fluid'src={hand3} alt="" />
                </Col>
                <Col xs={6} md={3}>
                <img className='w-100 img-fluid' src={hand4} alt="" />
                </Col>
            </Row>
                </div>

            </div>
        </div>
    );
};

export default Extrapart1;