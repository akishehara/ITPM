import { Button, Input } from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";
import axios from "axios";
import React, { useState } from "react";

function UShop(props) {
    console.log(props)


    const [comment1, setComment] = useState({
        title: "",
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.reload()
        console.log(comment1)
        try {
            axios.put('http://localhost:4000/shop/'+props.data._id, comment1)
                .then(response => {
                    console.log(response.data);

                })
                .catch(error => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    }

    function handleCaption(event) {
        const value = event.target.value;
        console.log(value);
        // use the value for further processing
        setComment({...comment1,"title":event.target.value})

    }
    return (
        <div style={{
            marginLeft:"30px",
            marginRight:"10px"
        }}>
            <Input placeholder="Enter New Shop Name" className="comment-input" onChange={handleCaption}  />
            <Button  onClick={handleSubmit} className='table-shop-td' >Update</Button>
        </div>
    )

}

export default UShop