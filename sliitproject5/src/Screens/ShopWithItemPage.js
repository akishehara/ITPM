import { Component } from "react";
import ItemShopForm from "../Components/ItemShopForm";
import Navbar from "../Components/navbar_component";
import ShowExistingItem from "../Components/ShowExistingItem";

export default class ShopWithItemPage extends Component {
    render() {
        return (
            <div>
                <ShowExistingItem/>
            </div>
        )
    }
}