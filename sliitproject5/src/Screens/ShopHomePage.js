import { Component } from "react";
import ExistingShop from "../Components/ExistingShop";
import ShopList from "../Components/ExistingShop";
import FuelAdd from "../Components/FuelAddComponent";
import Navbar from "../Components/navbar_component";
import Shop from "../Components/Shop/Shop";

export default class ShopHomePage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <Shop/>
            </div>
        )
    }
}