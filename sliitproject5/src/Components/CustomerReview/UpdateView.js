import { Rate } from "antd";
import axios from "axios";
import React, { useState } from "react";

function UpdateView(Prop) {
    console.log(Prop)
  
    const [formData, setFormData] = useState({
        Review: Prop.data.Review,
        Shop_id: localStorage.getItem('shop_id'),
        Customer_Name: localStorage.getItem('customer_name'),
        star: 0
    });
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    const [nameValue, setnameValue] = useState('')
    const [reviewAdded, setReviewAdded] = useState(false)
    const [selectedOption, setSelectedOption] = useState("Rate this shop");
  
    
     async function handleSubmit(event) {
        event.preventDefault();
        console.log('e')
        await axios.put('http://localhost:4000/create/'+Prop.data._id,formData).then(u=>{
            console.log(u)
            Prop.onUpdate();
        })

    }
    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'Review') {
            setnameValue(e.target.value)
        }
        setFormData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    function handleDropdownChange(event) {
        const provinceValue = event;
        setSelectedOption(provinceValue);

        setFormData((prev) => {
            return { ...prev, star: provinceValue };
        });
    }
    return (
        <div style={{marginLeft:"10%"}}>
            <form className='main-review'>
                <div className='topic-review'>
                    <h3 className='head-review'>Update Review</h3>
                </div>
                <div>
                    <label className='labelHead-review'>Add A Review</label>
                    <input type="text" name='Review' onChange={handleInputChange} value={nameValue} placeholder={Prop.data.Review} />
                </div>
                <span>
                    <Rate tooltips={desc} onChange={handleDropdownChange} value={selectedOption} />
                    {selectedOption ? <span className="ant-rate-text">{desc[selectedOption - 1]}</span> : ''}
                </span>
                <div className='form--review'>
                    <button className='Add Station' onClick={handleSubmit}>Update Review</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateView