import { Component } from "react";
import ExisitngFuelStationCC from "../Components/ExistingFuelStationCC";
import Navbar from "../Components/navbar_component";

export default class CFuelStationPage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <ExisitngFuelStationCC/>
            </div>
        )
    }
}