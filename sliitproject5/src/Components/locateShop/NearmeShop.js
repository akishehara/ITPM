import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import '../../Components/locateShop/shoplocate.css'

function NearmeShop() {
    const navigate = useNavigate();
    const [fuelStations, setfuelStations] = useState([])

    useEffect(() => {
        async function fetchStations() {
            axios.get('http://localhost:4000/shop/locateMe/' + localStorage.getItem('district_name'))
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
        <tr key={index} className='shop-table-rows'>
            <td className='table-shop-td'>
                <img src={row.image.url} alt="product" width="100" height="100" />
            </td>
            <td className='table-shop-td-name1' >{row.title}</td>
            <td className='table-shop-td-name1' >{row.province}</td>
            <td className='table-shop-td-name1' >{row.district}</td>
        </tr>
    ));

    return (
        <div className="bg-image">
        
            <table className="table-near-me">
                <thead className="table-head-me">
                    <tr className="table-row-me">
                        <th>Logo</th>
                        <th className="name-company">Company Name</th>
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

export default NearmeShop