import { Component } from "react";
import FuelAdd from "../Components/FuelAddComponent";
import Navbar from "../Components/navbar_component";

export default class AdminHomePage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <FuelAdd/>
            </div>
        )
    }
}