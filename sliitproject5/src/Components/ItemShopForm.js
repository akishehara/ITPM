import axios from 'axios';
import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ComponentCss/navbar.css'

function ItemShopForm() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('Name', name)
            formData.append('shop_id', localStorage.getItem('shop_id'))
            formData.append('Price',price)
            formData.append('Description',description)
            await axios.post('http://localhost:4000/item/create', formData);
            navigate('/shopHome')
            setIsSuccess(true);
            setErrorMessage('');

        } catch (error) {
            setIsSuccess(false);
            setErrorMessage(error.response.data.message || 'Error creating shop');
        }
        setIsLoading(false);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };
    const handleNameChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }
    const handleDesciptionChange = (event) => {
        setDescription(event.target.value)
    }
    return (
        <form className='main' style={{
            marginTop:"20%"
        }}>
            <div className='topic'>
                <h3 className='create-shop-title'>Add Item To Your Shop</h3>
            </div>
            <div className='form'>
                <div className='Email'>
                    <label className='emaillabel'>Item Name</label>
                    <input type="email" name="Email" className="FormControl" placeholder="Enter Name" onChange={handleNameChange} />
                </div>
                <div className='Email'>
                    <label className='emaillabel'>Item Price</label>
                    <input type="email" name="Email" className="FormControl" placeholder="Enter Name" onChange={handlePriceChange} />
                </div>
                <div className='Email'>
                    <label className='emaillabel'>Item Description</label>
                    <input type="email" name="Email" className="FormControl" placeholder="Enter Name" onChange={handleDesciptionChange} />
                </div>
                <label htmlFor="image" className='emaillabel' >Select an image for Item:</label>
                <input type="file" className='FormControl' onChange={handleImageChange} />
                <button className='signup' onClick={handleSubmit}>Create Item</button>
            </div>
        </form>
    )
}

export default ItemShopForm