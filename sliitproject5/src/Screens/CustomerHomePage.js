import { Component } from "react";
import CustomerHome from "../Components/CustomerHome";
import FuelAdd from "../Components/FuelAddComponent";
import Navbar from "../Components/navbar_component";
import OwnerHome from "../Components/OwnerHome";

export default class CustomerHomePage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <CustomerHome/>
            </div>
        )
    }
}