import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    const [error, SetError] = useState('');
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const hundleEmailBlur = event => {
        SetEmail(event.target.value);
    }
    const hundlePasswordBlur = event => {
        SetPassword(event.target.value);
    }
    const hundleConfirmPasswordBlur = event => {
        SetConfirmPassword(event.target.value);
    }
    const hundleErrorBlur = event => {
        SetError(event.target.value);
    }

    if (user) {
        navigate('/shop');

    }

    const handlecreateuser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {

            SetError('Password doesnt match');
            return;
        }
        if (password.length < 6) {
            SetError('password is too short minimum 6 characters');
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className="form-title">Sign up</h2>



                <form onSubmit={handlecreateuser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={hundleEmailBlur} type="email" name="email" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">password</label>
                        <input onBlur={hundlePasswordBlur} type="password" name='password' required />

                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input onBlur={hundleConfirmPasswordBlur} type="password" name='confirm-password' required />

                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>

                    <div className="input-group">
                        <input onBlur={hundleErrorBlur} className='form-submit' type="submit" value='Sign Up' required />
                        <p>
                            Already have an account? <Link className='form-link' to='/login'>Login</Link>
                        </p>
                    </div>

                </form >


            </div>


        </div >
    );
};

export default SignUp;