import { Component } from "react";
import CreateShopForm from "../Components/CreateShopForm";
import CurrentLocationForm from "../Components/CurrentLocationForm";
import Navbar from "../Components/navbar_component";
import NearMeStation from "../Components/NearMeStation";

export default class NearMePage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <NearMeStation/>
            </div>
        )
    }
}