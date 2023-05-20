import { Component } from "react";
import CreateShopForm from "../Components/CreateShopForm";
import Navbar from "../Components/navbar_component";

export default class CreateShopPage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <CreateShopForm/>
            </div>
        )
    }
}