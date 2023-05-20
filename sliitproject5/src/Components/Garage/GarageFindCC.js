import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import './GarageCSS/garage.css'

function GarageFindCC() {

    const navigate = useNavigate();
    function handleDelete(event) {
        console.log(event)
        axios.delete('http://localhost:4000/register/fuelStation/' + event.id).then(response => {
            console.log(response.data);
            window.location.reload(false);
            // Handle success response
        })
            .catch(error => {
                console.log(error);
                // Handle error response
            });
    }
    function handleUpdate(event){
        localStorage.setItem('myUpdatingId', event.id);
        navigate('/updateFuelStation')
    }
    const [services, setServices] = useState([])
    const cardList = services.map((service, index) => (
        <div key={index} className="card-services">
            <h3 className="card-sname">{service.SName}</h3>
            <p className="card-cname" >{service.CName}</p>
            <p className="card-service">{service.ServiceType}</p>
            <p className="card-service-button" onClick={() => makeAppoinment(service)}><button>Make Appoinment</button></p>
            <div className="card-actions">
            </div>
        </div>
    ));
    function makeAppoinment(service){
        localStorage.setItem('service_id',service._id);
        navigate('/makeAppoinment');
        
    }

    useEffect(() => {
        async function fetchStations() {
            const requese = await axios.get('http://localhost:4000/register/allServices');
            console.log(requese.data)
            setServices(requese.data.massage)
        }
        fetchStations()
    }, [])
    
    
    return (
        <div className="card-list" >
            {cardList}
        </div>
    )

}

export default GarageFindCC;
