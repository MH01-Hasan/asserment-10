import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { NavLink ,useLocation,useHistory} from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './Login.css'




const Login = () => {
    
   
    const style={
    textDecoration: 'none',
    color:'white',
    fontSize: '15px',
    fontFamily:'none',
    marginLeft:'17px',

    };


    const {singingoogle,facebook,handelnemail,handelpassword,handelsubmit,erroe}= UseAuth()
    const location = useLocation();
    // console.log("who are you" ,location.state?.from);
    const redairect = location.state?.from || '/home'
    const history = useHistory();
// handel google//
    const hamdelgoogle = ()=>{
        singingoogle()
        .then((result) => {
            history.push(redairect)
                      
          })
        
    };
    // handel google//
    //facebook handel///
    const hamdelfacebook = () =>{
        facebook()
        .then((result) => {
            history.push(redairect)            
          })      
    };
    //facebook handel///
    //submit//
    // const submit = () =>{
    //     handelsubmit()
    //     handelpassword()
    //     handelnemail()

    //     .then((result) => {
    //         history.push(redairect)            
    //       })
         
        
    // };
     //submit//
   
    return (
        <div className='login-from'>
        <div className='login '>
         <div className='login-fild'>
                 <h1 className="login-text">Login Form</h1>
                 <Form onSubmit={handelsubmit}>
                    <Form.Group as={Row} className="mb-3 input " controlId="formHorizontalEmail">
                        <Col sm={10}>
                        <Form.Control onBlur={handelnemail} className=" input-fild" type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3 input " controlId="formHorizontalPassword">
                       
                        <Col sm={10}>
                        <Form.Control onBlur={handelpassword} className="input-fild" type="password" placeholder="Password " required />
                        <span className='masseg'>{erroe}</span> <br/>
                       
                        </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button className='submit-btn' type="submit">Sign in</Button>
                        </Col>
                 </Form.Group>
                 </Form>

                 <div className='or'>---------------- Or login with ----------------</div>
                 <div className='other-signin'>
                 <Button onClick={hamdelfacebook} className='singin'><i className="fab fa-facebook-f faceboog-icon"></i>Facebook</Button>
                 <Button onClick={hamdelgoogle} className='singin-g'> <i className="fab fa-google google-icon"></i>Google</Button>

                 </div>
                 <div className='singup'>
                 <h5>Don't have an account ?<NavLink to='/signup' style={style}>Sign Up</NavLink></h5>
                 </div>
                


          </div>
         

    </div>
        </div>
    
    );
};

export default Login;