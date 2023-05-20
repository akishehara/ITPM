import { Card, Input, Space, Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const { Text, Link } = Typography;
let c = 0;


function Buy() {
    const [item, setItem] = useState([])
    const [count, setItemCount] = useState(1)
    const [available, setAvailable] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchStations() {
            const requese = await axios.get('http://localhost:4000/item/getItem/' + localStorage.getItem('item_id'));
            console.log(requese.data.users)
            setItem(requese.data.users)
            if (setItem) {
                setAvailable(true)
            }
            else {
                setAvailable(false)
            }

        }
        fetchStations()


    }, [])
    function handleAdd(event) {
        event.preventDefault()
        c++;
        setItemCount(c)
    }
    function handleBuy(event){
        navigate('/shopViewCC')
    }
    

    return (
        <div className="main-div-buy">
            <form className="buy-create-form">
                <div className='topic-form-buy'>
                    <h3 className='create-shop-title-form-buy'>Buy Your Item</h3>
                </div>
                <div className='form-form-buy'>
                    <div className='Email-form-buy'>
                        <label className='labelHead-form-buy'>{item.Name}</label>
                    </div>
                    <div>
                        <label className='labelHead-form-buy'>
                            {available &&
                                <img
                                    src={item.image.url}
                                />
                            }
                        </label>
                    </div>
                    <div className='labelHead-form-buy' >
                        Total:{item.Price}
                    </div>
                    <div className='labelHead-form-buy' >
                        Item count {count}
                        <button onClick={handleAdd} style={{marginLeft:"10px"}} >Add Item</button>
                    </div>
                    <Space direction="vertical">
                        <Card>
                           <Text>Card Number</Text>
                           <Input type="text"/>
                           <Text>Expire Date</Text>
                           <Input type="date"/>

                           <Text>MVC</Text>
                           <Input type="number"/>

                        </Card>
                    </Space>
                    <button onClick={handleBuy}>
                        Buy
                    </button>
                </div>
            </form>
        </div>
    )
}
export default Buy