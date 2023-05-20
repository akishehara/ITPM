import React, { useState } from 'react';
import './ComponentCss/signup.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function CreateShopForm() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [type,setType]=useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedOptionDistrict, setSelectedOptionDistrict] = useState("Please choose an option")
  const [selectedOption, setSelectedOption] = useState("Please choose an option");
  const District = ['--Please choose an option--', 'Colombo', 'Gampaha', ' Kalutara', ' Kandy',
    ' Matale', 'Nuwara Eliya', 'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
    'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee', 'Kurunegala', 'Puttalam',
    'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Moneragala', 'Ratnapura', 'Kegalle'
  ];

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', image);
      formData.append('title', title);
      formData.append('province',selectedOption)
      formData.append('district',selectedOptionDistrict)
      formData.append('ownerId',localStorage.getItem('owner_id'))
      formData.append('type',type)
      console.log(formData)

      await axios.post('http://localhost:4000/shop/create', formData);
      navigate('/ownerHome')
      setIsSuccess(true);

      setErrorMessage('');

    } catch (error) {
      setIsSuccess(false);
      setErrorMessage(error.response.data.message || 'Error creating shop');
    }
    setIsLoading(false);
  };
  function handleProvince(event) {
    const DistrictValue = event.target.value
    setSelectedOptionDistrict(DistrictValue);
  }
  function handleDropdownChange(event) {
    const provinceValue = event.target.value;
    setSelectedOption(provinceValue);
  }
  function handleDropdownTypeChange(event){
    const provinceValue = event.target.value;
    setType(provinceValue);
  }

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleTitleChange = (event) => {
    console.log(event.target.value)
    setTitle(event.target.value)
  }
  return (
    <form className='main-form-shop'>
      <div className='topic-form-shop'>
        <h3 className='create-shop-title-form-shop'>Create Your Shop</h3>
      </div>
      <div className='form-form-shop'>
        <div className='Email-form-shop'>
          <label className='labelHead-form-shop'>Shop Name</label>
          <input type="email" name="Email" className="FormControl-form-shop" placeholder="Enter Name" onChange={handleTitleChange} />
        </div>

        <label htmlFor="dropdown" className='labelHead-form-shop'>Shop Type</label>
        <select id="dropdown-form-shop" value={type} onChange={handleDropdownTypeChange}>
          <option value="">--Please choose an option--</option>
          <option value="Tyre">Tyre</option>
          <option value="Oil">Oil</option>
          <option value="Battery">Battery</option>
        </select>
        <label htmlFor="dropdown" className='labelHead-form-shop'>Province</label>
        <select id="dropdown-form-shop" value={selectedOption} onChange={handleDropdownChange}>
          <option value="">--Please choose an option--</option>
          <option value="Western Province">Western Province</option>
          <option value="Southern Province">Southern Province</option>
          <option value="Central Province">Central Province</option>
          <option value="Uva Province">Uva Province</option>
          <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
          <option value="Nothern Province">Nothern Province</option>
        </select>
        <label htmlFor="dropdown" className='labelHead-form-shop'>District</label>
        <select id="dropdown" value={selectedOptionDistrict} onChange={handleProvince}>
          {District.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/*<label htmlFor="image" className='labelHead-form-shop' >Select an image:</label>*/}
        <label className='labelHead-form-shop'>Select an Image</label>
        <input type="file" className='FormControl-form-shop' onChange={handleImageChange} />
        <button className='signup-form-shop' onClick={handleSubmit}>Create Shop</button>
      </div>
    </form>
  )
}

export default CreateShopForm;
