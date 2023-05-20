import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import ExisitngFuelStation from '../ExistingFuelStation';

function CreateServiceForm() {
    const [selectedOption, setSelectedOption] = useState("Please choose an option");
    const [selectedOptionP, setSelectedOptionP] = useState("Please choose an option");
    const [selectedOptionD, setSelectedOptionD] = useState("Please choose an option");
    const [selectedOptionDistrict, setSelectedOptionDistrict] = useState("Please choose an option")
    const [formData, setFormData] = useState({
        owner_id: localStorage.getItem('owner_id'),
        owner_email: localStorage.getItem('owner_email'),
        SName: "",
        CName: "",
        ServiceType: "",
        province: "",
        district: ""
    });
    const District = ['--Please choose an option--', 'Colombo', 'Gampaha', ' Kalutara', ' Kandy',
        ' Matale', 'Nuwara Eliya', 'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
        'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee', 'Kurunegala', 'Puttalam',
        'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Moneragala', 'Ratnapura', 'Kegalle'
    ];
    const navigate = useNavigate();
    const [nameValue, setnameValue] = useState('')
    const [CompanyNameValue, setCompanyNameValue] = useState('')
    const [existing, setexisting] = useState(false)
    const fuelStationAddFormRef = useRef(null);

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'SName') {
            setnameValue(e.target.value)
        }
        if (name === 'CName') {
            setCompanyNameValue(e.target.value)
        }

        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }

    function handleDropdownChange(event) {
        const provinceValue = event.target.value;
        setSelectedOption(provinceValue);

        setFormData((prev) => {
            return { ...prev, ServiceType: provinceValue };
        });
    }

    function handleDropdownProvinceChange(event) {
        const provinceValue = event.target.value;
        console.log('e')
        setSelectedOptionP(provinceValue);

        setFormData((prev) => {
            return { ...prev, province: provinceValue };
        });
    }
    function handleDistrict(event) {
        const provinceValue = event.target.value;
        setSelectedOptionD(provinceValue);

        setFormData((prev) => {
            return { ...prev, district: provinceValue };
        });
    }




    function handleSubmit(event) {
        event.preventDefault();
        const { Name, CompanyName, Province } = formData;
        console.log(formData)
        axios.post('http://localhost:4000/register/serviceRegister', formData)
            .then(response => {
                console.log(response.data);
                // Handle success response
                if (response.data.massage === 'Service added') {
                    navigate('/ownerHome')
                }
            })
            .catch(error => {
                console.log(error);
                // Handle error response
            });
        setnameValue('')
        setCompanyNameValue('')
        setSelectedOptionDistrict('Please choose an option')

    }
    function handleExisting(event) {
        event.preventDefault()
        setexisting(true)
        fuelStationAddFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div>
            <form className='main'>
                <div className='topic'>
                    <h3 className='head'>Add Your Service Hear</h3>
                </div>
                <div>
                    <label className='labelHead'>Service Provider Name</label>
                    <input type="text" name='SName' onChange={handleInputChange} value={nameValue} />
                </div>
                <div>
                    <label className='labelHead'>Company Name</label>
                    <input type="text" name='CName' onChange={handleInputChange} value={CompanyNameValue} />
                </div>
                <label htmlFor="dropdown" className='labelHead'>Province</label>
                <select id="dropdown" value={selectedOptionP} onChange={handleDropdownProvinceChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="Western Province">Western Province</option>
                    <option value="Southern Province">Southern Province</option>
                    <option value="Central Province">Central Province</option>
                    <option value="Uva Province">Uva Province</option>
                    <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
                    <option value="Nothern Province">Nothern Province</option>
                </select>
                <label htmlFor="dropdown" className='labelHead'>District</label>
                <select id="dropdown" value={selectedOptionD} onChange={handleDistrict}>
                    {District.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <label htmlFor="dropdown" className='labelHead'>Service Type</label>
                <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="cut and polish">cut and polish</option>
                    <option value="repairs">repairs</option>
                    <option value=" painting">painting</option>
                </select>
                <div className='form'>
                    <button className='Add Station' onClick={handleSubmit}>Add Service</button>
                </div>
            </form>
            <div ref={fuelStationAddFormRef}>
                {existing && <ExisitngFuelStation />}
            </div>
        </div>

    )
}

export default CreateServiceForm;
