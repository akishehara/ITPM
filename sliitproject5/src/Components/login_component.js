import React, { Component, useState } from 'react'
import './ComponentCss/signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({
        Email: "", Password: ""
    });
    const [selectedOption, setselectedOption] = useState('')
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
    function handleUser(event) {
        event.preventDefault();
        if (selectedOption === 'Owner') {
            axios.post('http://localhost:4000/register/login', formData)
                .then(response => {
                    console.log(response.data);
                    if (response.data.message === 'owner'){
                        navigate('/ownerHome')
                        localStorage.setItem('owner_id',response.data.data._id)
                        localStorage.setItem('owner_email',response.data.data.Email)
                    }

                })
                .catch(error => {
                    console.log(error);
                    // Handle error response
                });
            console.log(formData)
        }
        if (selectedOption === 'Admin') {
            axios.post('http://localhost:4000/register/adminLogin', formData)
                .then(response => {
                   if(response.data.message==='Login successful'){
                    navigate('/adminHome')
                   }
                })
                .catch(error => {
                    console.log(error);
                    // Handle error response
                });
            console.log(formData)

        }
        if (selectedOption === 'Customer') {
            axios.post('http://localhost:4000/register/customerLogin', formData)
                .then(response => {
                    console.log(response.data);
                    // Handle success response
                    if(response.data.message==='Customer login successfully'){
                        localStorage.setItem('customer_name',response.data.data.Name)
                        navigate('/customerHome')
                       }
                })
                .catch(error => {
                    console.log(error);
                    // Handle error response
                });
            console.log(formData)

        }
    }
    return (
        <form className='main'>
            <div className='topic'>
                <h3 className='head'>Sign In</h3>
            </div>
            
            <div className='form'>
                <div className='radio'>
                <div className='type-radio'>
                    <input className='input-radio' type="radio" onChange={handleRadioButton} value="Admin" checked={selectedOption === 'Admin'} />
                    <label className='label-radio'>Admin</label>
                </div>
                <div className='type-radio'>
                    <input className='input-radio' type="radio" onChange={handleRadioButton} value="Owner" checked={selectedOption === 'Owner'} />
                    <label className='label-radio'>Owner</label>
                </div>
                <div className='type-radio'>
                    <input className='input-radio' type="radio" onChange={handleRadioButton} value="Customer" checked={selectedOption === 'Customer'} />
                    <label className='label-radio'>Customers</label>
                </div>
                </div>
                <div className='Email'>
                    <label className='emaillabel'>Email</label>
                    <input type="email" name="Email" className="FormControl" placeholder="Enter Email" onChange={handleInputChange} />
                </div>
                <div className='Email'>
                    <label className='emaillabel' >Password</label>
                    <input type="password" name="Password" className="FormControl" placeholder="Enter Password" onChange={handleInputChange} />
                </div>

                <div className='already'>
                    <p className='text'>Did you haven't signup</p>
                    <a href="/">Sign up</a>
                </div>
                <button className='signup' onClick={handleUser}>Sign In</button>
            </div>
        </form>
    )
}
export default Login;