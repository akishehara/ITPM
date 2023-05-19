import { Component } from "react";
import AddReview from "../../Components/CustomerReview/AddReview";
import ExisitngCustomerReview from "../../Components/CustomerReview/ExistingCustomerReview";


export default class CustomerReviewPage extends Component {
    render() {
        return (
            <div>
                <AddReview />
            </div>
        )
    }
}