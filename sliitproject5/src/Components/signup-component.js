import React, { Component, useState } from 'react'
import './ComponentCss/signup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Sign() {
    const [formData, setFormData] = useState({
        Email: "", Name: "", Phone: "", Password: "", CPW: ""
    });
    const [selectedOption, setselectedOption] = useState('')
    const [already, setalready] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate();

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    function handleRadioButton(event) {
        setselectedOption(event.target.value)
    }

    function handleSub(event) {
        event.preventDefault();
        if ((formData.CPW === formData.Password)) {
            setIsSubmitted(false);
        }
        else {
            setIsSubmitted(true);
            console.log(isSubmitted);
        }

        if (!isSubmitted && checkValues()) {
            if (selectedOption === 'User') {
                axios.post('http://localhost:4000/register/user', formData)
                    .then(response => {
                        console.log(response);
                        // Handle success response
                        navigate('/signin')
                    })
                    .catch(error => {
                        console.log(error);
                        // Handle error response
                    });
            }
            if (selectedOption === 'Admin') {
                axios.post('http://localhost:4000/register/admin', formData)
                    .then(response => {
                        console.log(response.data.message)
                        if (response.data.message === 'You cannot register again as an admin.') {
                            setalready(true)
                            navigate('/signin')
                        }
                        else {
                            setalready(false)
                        }
                        // Handle success response
                    })
                    .catch(error => {
                        console.log(error);
                        // Handle error response
                    });
            }
            if (selectedOption === 'Customer') {
                axios.post('http://localhost:4000/register/customer', formData)
                    .then(response => {
                        console.log(response);
                        navigate('/signin')
                        // Handle success response
                    })
                    .catch(error => {
                        console.log(error);
                        // Handle error response
                    });
            }
        }
        function checkValues() {
            if (formData.Email.length === 0 || formData.Name.length === 0) {
                return false;
            }
            else {
                return true;
            }
        }

    }
    return (
        <form className='main' onSubmit={handleSub} >

            <div className='topic'>
                <h3 className='head'>Sign UP</h3>
            </div>
            <div className='form'>
                <div className='radiobuttons'>
                    <div>
                        <input type="radio" onChange={handleRadioButton} value="Admin" checked={selectedOption === 'Admin'} />
                        <label>Admin</label>
                    </div>
                    <div>
                        <input type="radio" onChange={handleRadioButton} value="User" checked={selectedOption === 'User'} />
                        <label>Owner</label>
                    </div>
                    <div>
                        <input type="radio" onChange={handleRadioButton} value="Customer" checked={selectedOption === 'Customer'} />
                        <label>Customers</label>
                    </div>
                </div>
                <div className='Email'>
                    <label className='emaillabel'>Email</label>
                    <input type="email" name="Email" className="FormControl" placeholder="Enter Email" onChange={handleInputChange} />
                </div>
                <div className='Email'>
                    <label className='emaillabel'>Name</label>
                    <input type="name" name="Name" className='FormControl' placeholder="Enter Name" onChange={handleInputChange} />
                </div>
                <div className='Email'>
                    <label className='emaillabel'>Phone</label>
                    <input type="number" name="Phone" className='FormControl' placeholder='Enter PhoneNumber' onChange={handleInputChange} />
                </div>
                <div className='Email'>
                    <label className='emaillabel' >Password</label>
                    <input type="password" name="Password" className="FormControl" placeholder="Enter Password" onChange={handleInputChange} />
                </div>
                {isSubmitted && <div className='error'>Password are not matching</div>}
                <div className='Email'>
                    <label className='emaillabel'>Confirm Password</label>
                    <input type="password" name="CPW" className="FormControl" placeholder="Enter Password" onChange={handleInputChange} />
                </div>
                {isSubmitted && <div className='error'>Password are not matching</div>}
                <div className='already'>
                    <p className='text'>Did you already signup</p>
                    <a href="/signin">Sign in</a>
                </div>
                <div>
                    {already && <div>You already have an Account</div>}
                </div>
                <button className='signup'>SignUP</button>
            </div>
        </form>
    )
}
export default Sign;