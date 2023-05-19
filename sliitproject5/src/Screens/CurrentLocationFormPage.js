import { Component } from "react";
import CreateShopForm from "../Components/CreateShopForm";
import CurrentLocationForm from "../Components/CurrentLocationForm";
import Navbar from "../Components/navbar_component";

export default class CurrentLocationFormPage extends Component {
    render() {
        return (
            <div>
            
                <CurrentLocationForm />
            </div>
        )
    }
}