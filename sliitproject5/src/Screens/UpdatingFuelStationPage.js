import { Component } from "react";
import FuelAdd from "../Components/FuelAddComponent";
import Navbar from "../Components/navbar_component";
import UpdatingForm from "../Components/UpdatingForm";

export default class UpdatingFuelStationPage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <UpdatingForm/>
            </div>
        )
    }
}