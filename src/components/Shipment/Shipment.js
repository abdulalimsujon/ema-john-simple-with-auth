import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, SetEmail] = useState('');
    const [name, SetName] = useState('');
    const [address, SetAddress] = useState('');
    const [phone, SetPhone] = useState('');
    const [error, SetError] = useState('');
    // const navigate = useNavigate();

    const hundleNameBlur = event => {
        SetName(event.target.value);
    }

    const hundleAdressBlur = event => {
        SetAddress(event.target.value);
    }
    const hundlePhoneNumberBlur = event => {
        SetPhone(event.target.value);
    }
    const hundleErrorBlur = event => {
        SetError(event.target.value);
    }
    const handlecreateuser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className="form-title">Shipping information</h2>



                <form onSubmit={handlecreateuser}>
                    <div className="input-group">
                        <label htmlFor="Name">Your Name</label>
                        <input onBlur={hundleNameBlur} type="name" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Mail</label>
                        <input value={user?.email} readOnly type="email" name="email" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={hundleAdressBlur} type="text" name='address' required />

                    </div>

                    <div className="input-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input onBlur={hundlePhoneNumberBlur} type="text" name='PhoneNumber' required />

                    </div>


                    <div className="input-group">
                        <p style={{ color: 'red' }}>
                            {user?.error}
                        </p>
                        <input onBlur={hundleErrorBlur} className='form-submit' type="submit" value='add Shipping' required />
                    </div>

                </form >


            </div>


        </div >
    );
};

export default Shipment;