import { Component } from "react";
import CurrentLocationForShop from "../../Components/locateShop/CurrentLocationForShop";
import Navbar from "../../Components/navbar_component";
import TireComparision from "../../Components/Tire/TireComparision";


export default class TirePage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <TireComparision/>
            </div>
        )
    }
}