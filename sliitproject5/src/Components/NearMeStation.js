import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import '../Components/ComponentCss/existingFuel.css'

function NearMeStation() {
    const navigate = useNavigate();
    const [fuelStations, setfuelStations] = useState([])

    useEffect(() => {
        async function fetchStations() {
            axios.get('http://localhost:4000/register/locateMe/'+localStorage.getItem('district_name'))
            .then(response => {
                console.log(response.data);
                // Handle success response
                setfuelStations(response.data)
            })
            .catch(error => {
                console.log(error);
                // Handle error response
            });

        }
        fetchStations()
    }, [])

    const tableRows = fuelStations.map((row, index) => (
        <tr key={index} >
            <td>{row.Name}</td>
            <td>{row.CompanyName}</td>
            <td>{row.Province}</td>
            <td>{row.District}</td>
        </tr>
    ));
    return (
        <div className="bg-image">
            <table className="table-near-me">
                <thead className="table-head-me">
                    <tr className="table-row-me">
                        <th>Name</th>
                        <th>Company Name</th>
                        <th>Province</th>
                        <th>District</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )

}

export default NearMeStation