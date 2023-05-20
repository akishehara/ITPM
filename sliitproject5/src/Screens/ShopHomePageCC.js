import { Component } from "react";
import ExistingShop from "../Components/ExistingShop";
import ShopList from "../Components/ExistingShop";
import ShopListCC from "../Components/ExsitingShopCC";
import FuelAdd from "../Components/FuelAddComponent";
import Navbar from "../Components/navbar_component";

export default class ShopHomePageCC extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <ShopListCC/>
            </div>
        )
    }
}