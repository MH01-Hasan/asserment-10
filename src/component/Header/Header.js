
import React from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import  './Header.css'
import logo from '../../image/covid2-footer-logo.png'

const Header = () => {

    const style={
    textDecoration:"none",
    fontSize: "20px",
    fontFamily: "serif",
    marginLeft: "15px",
    fontWeight: "700",
    
        };

    
const {logout, user} = UseAuth();


    return (
        <div className='header-fild pb-5 ' >
            
            <Navbar className='header container ' collapseOnSelect expand="lg"  >
                <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text className='header-component'>
                             <NavLink to='/home'style={style}>Home</NavLink>
                             <NavLink to='/service'style={style}>Service</NavLink>
                             <NavLink to='/about'style={style}>Covid-19</NavLink>
                             <NavLink to='/contact'style={style}>Contact</NavLink>
                             
                            
                                {!user?.email ?<NavLink to='/login'style={style}>Login </NavLink>:
                                <Button  className='logout-btn' onClick ={logout}>Log out</Button>}
                              <p className='name'> {user?.displayName}</p>
                            </Navbar.Text>
                            
                </Navbar.Collapse> 
            </Container>
            </Navbar>
           
        </div>
    );
};

export default Header;