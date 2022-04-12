import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your name'/>
              
                <input type="email" name="" id="" placeholder='Email Address' required/>
               
                <input type="password" name="" id="" placeholder='Password' required/>

                <input type="submit" value="Register" />
            </form>

            <p>Already have an Account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
        </div>
    );
};

export default Register;