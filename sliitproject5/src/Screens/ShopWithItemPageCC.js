import { Component } from "react";
import ItemShopForm from "../Components/ItemShopForm";
import Navbar from "../Components/navbar_component";
import ShowExistingItem from "../Components/ShowExistingItem";
import ShowExistingItemCC from "../Components/ShowExistingItemCC";

export default class ShopWithItemPageCC extends Component {
    render() {
        return (
            <div>
                <ShowExistingItemCC/>
            </div>
        )
    }
}