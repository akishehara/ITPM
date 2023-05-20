import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import '../../Components/locateShop/shoplocate.css'

function NearmeGarage() {
    const navigate = useNavigate();
    const [fuelStations, setfuelStations] = useState([])

    useEffect(() => {
        async function fetchStations() {
            axios.get('http://localhost:4000/register/locateMeg/' + localStorage.getItem('district_name'))
                .then(response => {
                    console.log(response.data);
                    // // Handle success response
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
        <tr key={index} className='shop-table-rows'>
            <td className='table-shop-td-name1' >{row.CName}</td>
            <td className='table-shop-td-name1' >{row.SName}</td>
            <td className='table-shop-td-name1' >{row.ServiceType}</td>
            <td className='table-shop-td-name1' >{row.province}</td>
            <td className='table-shop-td-name1' >{row.district}</td>
        </tr>
    ));

    return (
        <div className="bg-image">
            <h1 className="shop-near-me-head">Services Near You</h1>
            <table className="table-near-me">
                <thead className="table-head-me">
                    <tr className="table-row-me">
                        <th className="name-company">Company Name</th>
                        <th className="name-company">Service Name</th>
                        <th className="name-company">Service Type</th>
                        <th className="name-company">Province</th>
                        <th className="name-company">District</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )

}

export default NearmeGarage