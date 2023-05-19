import React, { useRef, useState } from 'react'
import './ComponentCss/signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../Components/ComponentCss/fuelAddingForm.css'
import ExisitngFuelStation from './ExistingFuelStation';

function FuelStationAddForm() {
    const [selectedOption, setSelectedOption] = useState("Please choose an option");
    const [selectedOptionDistrict,setSelectedOptionDistrict]=useState("Please choose an option")
    const [formData, setFormData] = useState({
        Name: "",
        CompanyName: "",
        Province: "",
        District:""
    });
    const [nameValue, setnameValue] = useState('')
    const [CompanyNameValue, setCompanyNameValue] = useState('')
    const [existing, setexisting] = useState(false)
    const fuelStationAddFormRef = useRef(null);
    const District = ['--Please choose an option--', 'Colombo', 'Gampaha', ' Kalutara', ' Kandy',
        ' Matale', 'Nuwara Eliya', 'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
        'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee', 'Kurunegala', 'Puttalam',
        'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Moneragala', 'Ratnapura', 'Kegalle'
    ];


    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'Name') {
            setnameValue(e.target.value)
        }
        if (name === 'CompanyName') {
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
            return { ...prev, Province: provinceValue };
        });
    }

    function handleProvince(event){
        const DistrictValue=event.target.value
        setSelectedOptionDistrict(DistrictValue);

        setFormData((prev) => {
            return { ...prev, District: DistrictValue };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const { Name, CompanyName, Province } = formData;
        axios.post('http://localhost:4000/register/fuelStation', formData)
            .then(response => {
                console.log(response.data);
                // Handle success response
            })
            .catch(error => {
                console.log(error);
                // Handle error response
            });
        setnameValue('')
        setCompanyNameValue('')

    }
    function handleExisting(event) {
        event.preventDefault()
        setexisting(true)
        fuelStationAddFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div>
            <form className='main-current-loc'>
                <div className='topic'>
                    <h3 className='head'>Fuel Station Adding Form</h3>
                </div>
                <div>
                    <label className='labelHead'>Fuel Station Name</label>
                    <input type="text" name='Name' onChange={handleInputChange} value={nameValue} />
                </div>
                <div>
                    <label className='labelHead'>Company Name</label>
                    <input type="text" name='CompanyName' onChange={handleInputChange} value={CompanyNameValue} />
                </div>
                <label htmlFor="dropdown" className='labelHead'>Province</label>
                <select id="dropdown" value={selectedOption} onChange={handleDropdownChange}>
                    <option value="">--Please choose an option--</option>
                    <option value="Western Province">Western Province</option>
                    <option value="Southern Province">Southern Province</option>
                    <option value="Central Province">Central Province</option>
                    <option value="Uva Province">Uva Province</option>
                    <option value="Sabaragamuwa Province">Sabaragamuwa Province</option>
                    <option value="Nothern Province">Nothern Province</option>
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
                    <button className='Add Station' onClick={handleSubmit}>Add Station</button>
                </div>
                <div className='form'>
                    <button className='Add Station' onClick={handleExisting}>Show Exisitng Stations</button>
                </div>
            </form>
            <hr class="rounded" style={{
                  borderTop: "8px solid #bbb",
                  borderRadius: "5px",
                  borderBottom:"20px"
            }}></hr>

            <div ref={fuelStationAddFormRef}>
                {existing && <ExisitngFuelStation />}
            </div>
        </div>

    )
}

export default FuelStationAddForm;
