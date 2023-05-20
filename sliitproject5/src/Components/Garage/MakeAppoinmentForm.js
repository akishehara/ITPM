import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import ExisitngFuelStation from '../ExistingFuelStation';
import emailjs from '@emailjs/browser';
import './GarageCSS/appoinment.css'
import { Button, Input } from 'antd';
import jsPDF from 'jspdf';

function MakeAppoinmentForm() {
    const [selectedOption, setSelectedOption] = useState("Please choose an option");
    const [selectedOptionDistrict, setSelectedOptionDistrict] = useState("Please choose an option")
    const form = useRef();
    const navigate = useNavigate();
    const [nameValue, setnameValue] = useState('')
    const [CompanyNameValue, setCompanyNameValue] = useState('')
    const [existing, setexisting] = useState(false)
    const fuelStationAddFormRef = useRef(null);
    const [service, setService] = useState([])
    const [owner, setOwner] = useState([])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_auyqf32', 'template_y2c4npg', form.current, 'mgyNqJHp3m0JmAZcH')
            .then((result) => {
                console.log(result.text);
                navigate('/seeServices')
            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        async function fetchStations() {
            const response = await axios.get(`http://localhost:4000/register/getAService/${localStorage.getItem('service_id')}`);
            setService(response.data);
        }
        fetchStations();
    }, []);
    const generatePDF = () => {
        var doc = new jsPDF({
            orientation: "landscape", // set the orientation to landscape
            unit: "pt", // set the unit to points
            format: "a3", // set the page format to A4
            width: 1500 // set the width to 800 points
        });
        doc.html(document.querySelector("#pdf"), {
            callback: function(pdf) {
                pdf.save("mypdf.pdf");
            }
        });
    }


    return (
        <div>
            <h2 className='head-makeappointment'>Make Your Appoinment</h2>
            <div id='pdf'>
            <card className='class-makeappoinment card-whatsapp'>
                <div>
                    <h2 className='topic-appoinment'>{service.ServiceType}</h2>
                    <h2 className='topic-appoinment'>{service.owner_email}</h2>

                </div>
            </card>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>SendingEmail</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <label>Date</label>
                <Input type="date" name="date" />
                <input type="submit" value="Send" /> 
            </form>
                          
            </div>
            <Button onClick={generatePDF} className='pdf-download' style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',marginLeft:"600px",marginBottom:"50px"
            }}>Download Report</Button>
        </div>

    )
}

export default MakeAppoinmentForm;
