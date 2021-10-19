import React from 'react';
import Login from '../Login/Login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
import AuthProvider from '../../contex/AuthProvider';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Error from '../Error/Error';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';
import Booking from '../Booking/Booking';




const Setrout = () => {
    return (
        <div>
            <AuthProvider>
            <Router>
                <Header/>
               <Switch>
               <Route exact path ='/'>
                        <Home></Home>
                    </Route>

                  <Route path ='/home'>
                        <Home></Home>
                    </Route>

                    <Route path ='/about'>
                        <About></About>
                        
                    </Route>
                    <Route path ='/service'>
                        <Service></Service>
                        
                    </Route>
                    <Route path ='/Contact'>
                        <Contact></Contact>
                    </Route>
               
                    <Route path ='/login'>
                        <Login></Login>
                    </Route>

                    <PrivateRoute path ='/booking/:bookingid'>
                        <Booking></Booking>
                    </PrivateRoute>


                    <Route path ='*'>
                        <Error></Error>

                    </Route>
                    
                </Switch>
                <Footer></Footer>
            </Router>
            </AuthProvider>
            
           
        </div>
    );
};

export default Setrout;