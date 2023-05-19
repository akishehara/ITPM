import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import '../Components/ComponentCss/existingFuel.css'

function ExisitngFuelStation() {
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
    const [fuelStations, setfuelStations] = useState([])
    const tableRows = fuelStations.map((row, index) => (
        <tr key={index}>
            <td>{row.Name}</td>
            <td>{row.CompanyName}</td>
            <td>{row.Province}</td>
            <td><button onClick={() => handleDelete(row)}>Delete</button></td>
            <td><button onClick={() => handleUpdate(row)}>Update</button></td>
        </tr>
    ));

    useEffect(() => {
        async function fetchStations() {
            const requese = await axios.get('http://localhost:4000/register/fuelStation');
            console.log(requese.data.massage)
            setfuelStations(requese.data.massage)

        }
        fetchStations()
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Location</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )

}

export default ExisitngFuelStation