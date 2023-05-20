import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ComponentCss/ShopList.css'; // import CSS file

const ShowExistingItemCC = () => {
    const [items, setItems] = useState([]);
    const [shops, setShop] = useState()
    const [title, setTitle] = useState()
    const navigate = useNavigate();
    const formData = new FormData();
    formData.append('shop_id', localStorage.getItem('shop_id'));
    useEffect(() => {
        // Fetch shop data from API on component mount
        const fetchData = async () => {
            axios.post('http://localhost:4000/item/shopWise', formData)
                .then((response) => {
                    if (response) {
                        console.log(response.data)
                        setItems(response.data.users)
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

            axios.get('http://localhost:4000/shop/findOne/' + localStorage.getItem('shop_id'))
                .then((response) => {
                    console.log(response.data)
                    setShop(response.data.image.url)
                    setTitle(response.data.title)
                })
        }
        fetchData()
    }, []);
    function handleBuy(row) {
        console.log(row)
        localStorage.setItem('item_id',row._id)
        navigate('/buy')
    }

    const cardViews = items.map((shop, index) => (
        <div className="card" key={index}>
            <img src={shop.image.url} alt="shop" className="item-img" />
            <div className="card-container">
                <h4 className="item-desc">{shop.Description}</h4>
                <h4 className="item-price">Rs. {shop.Price}</h4>
                <h4 className="item-name">{shop.Name}</h4>
                <button className='button' onClick={() => handleBuy(shop)}>Buy</button>
            </div>
        </div>
    ));
    return (
        <div>
            <div className='iconLogo' style={{ display: 'flex', alignItems: 'center' }}>
                <img src={shops} alt="shop" className="item-img-logo" style={{ width: "100px" }} />
                <h1 className='shop_name'>{title}</h1>
            </div>


            <div className="item-grid"> {/* wrap cardViews in a container */}
                {cardViews}
            </div>
        </div>
    );
};

export default ShowExistingItemCC;
