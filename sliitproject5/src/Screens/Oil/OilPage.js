import { Component } from "react";
import Navbar from "../../Components/navbar_component";
import OilComparision from "../../Components/Oil/OilComparision";
import TireComparision from "../../Components/Tire/TireComparision";


export default class OilPage extends Component {
    render() {
        return (
            <div className= "tier-main-div">
            <Navbar/>
            <OilComparision/>
            </div>
        )
    }
}