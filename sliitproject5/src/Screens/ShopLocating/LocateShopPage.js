import { Component } from "react";
import CurrentLocationForShop from "../../Components/locateShop/CurrentLocationForShop";
import Navbar from "../../Components/navbar_component";


export default class CurrentLocationShopPage extends Component {
    render() {
        return (
            <div>
            <Navbar/>
            <CurrentLocationForShop/>
            </div>
        )
    }
}