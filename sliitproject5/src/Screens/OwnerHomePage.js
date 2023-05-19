import { Component } from "react";
import Animation from "../Components/Animation";
import FuelAdd from "../Components/FuelAddComponent";
import Navbar from "../Components/navbar_component";
import OwnerHome from "../Components/OwnerHome";

export default class OwnerHomePage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <OwnerHome/>
            </div>
        )
    }
}