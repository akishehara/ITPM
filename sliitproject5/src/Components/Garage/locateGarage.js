import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';


function CurrentLocationForGarage() {
    const [selectedOption, setSelectedOption] = useState("Please choose an option");
    const [formData, setFormData] = useState({
        District: ""
    });
    const navigate = useNavigate();
    const [existing, setexisting] = useState(false)
    const fuelStationAddFormRef = useRef(null);
    const [selectedOptionDistrict, setSelectedOptionDistrict] = useState("Please choose an option")
    const province = ['--Please choose an option--', 'Western Province', 'Southern Province', 'Central Province', 'Uva Province',
        'Sabaragamuwa Province', 'Nothern Province'
    ];
    const District = ['--Please choose an option--', 'Colombo', 'Gampaha', ' Kalutara', ' Kandy',
        'Matale', 'Nuwara Eliya', 'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
        'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee', 'Kurunegala', 'Puttalam',
        'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Moneragala', 'Ratnapura', 'Kegalle'
    ];

    function handleDropdownChange(event) {
        const provinceValue = event.target.value;
        setSelectedOption(provinceValue);
    }
    function handleProvince(event) {
        const DistrictValue = event.target.value
        setSelectedOptionDistrict(DistrictValue);

        setFormData((prev) => {
            return { ...prev, District: DistrictValue };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData)
        console.log(selectedOptionDistrict)
        axios.get('http://localhost:4000/register/locateMeg/' + selectedOptionDistrict)
            .then(response => {
                console.log(response.data);
                // Handle success response
                localStorage.setItem('district_name', selectedOptionDistrict)
                navigate('/nearGarage')
            })
            .catch(error => {
                console.log(error);
                // Handle error response
            });

        setSelectedOption('')
        setSelectedOptionDistrict('')

    }
    return (
        <div className="locate-div">
            <div className="bg-map" >

                <h3 className='head'
                    style={{
                        height:"max-content",
                        color: "black",
                        fontFamily: "sans-serif",
                        fontSize: "55px",
                        padding:"20px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        marginLeft:"30%",
                        marginTop:"10%"
                    }}
                >Locate My garage</h3>

            </div>
            <Form className='main-current-loc'>
               
                <div>
                    <label className='labelHead'>Current City</label>
                    <input type="text" name='Name' placeholder='enter your location' />
                </div>
                <label htmlFor="dropdown" className='labelHead'>Province</label>
                <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                    {province.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <label htmlFor="dropdown" className='labelHead'>District</label>
                <select id="dropdown" value={selectedOptionDistrict} onChange={handleProvince}>
                    {District.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <div className='form'>
                    <button className='Add Station' onClick={handleSubmit}>Locate me</button>
                </div>
            </Form>

        </div>

    )
}

export default CurrentLocationForGarage;
