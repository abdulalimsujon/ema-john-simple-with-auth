import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

import './Login.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const hundleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const hundlepasswordBlur = event => {
        setpassword(event.target.value);

    }

    if (user) {
        navigate(from, { replace: true });

    }

    const hundleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className="form-title">Login</h2>



                <form onSubmit={hundleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={hundleEmailBlur} type="email" name="email" required />
                    </div>

                    <div className="input-group">
                        <label onBlur={hundlepasswordBlur} htmlFor="password">password</label>
                        <input type="password" name='password' required />




                    </div>
                    <div>
                        <p style={{ color: 'red' }}>{error?.message}</p>

                    </div>

                    <div className="input-group">

                        <p>
                            New to Ema-john? <Link className='form-link' to='/signup'>Create an Account</Link>
                        </p>
                        {
                            loading && <p>Loading...</p>
                        }

                        <input className='form-submit' type="submit" value='login' required />


                    </div>

                </form >


            </div>


        </div >
    );
};

export default Login;