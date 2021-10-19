import React from 'react';
import './ServiceData.css'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ServiceData = (props) => {
    // console.log(props.data)
    const {img,dispalyName,id}=props.data
    
    return (
        
            <div className='col-lg-4 col-sm-6 card-body'>
                <Card >
                <Card.Img variant="top" src  ={img} className='w-100 img-fluid image-fild' />
                <Card.Body>
                    <Card.Title>Dr.{dispalyName}</Card.Title>
                <Link to ={`/booking/${id}`}>
                    <Button variant="primary">See Details</Button>
                    </Link>
                </Card.Body>
                </Card>
            </div>
       
        
    )
}

export default ServiceData;