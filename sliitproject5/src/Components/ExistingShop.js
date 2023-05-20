import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../Components/ComponentCss/existingShop.css'
import { Space } from 'antd';
import UShop from './Shop/UpdateShop';

const ShopList = (Prop) => {
  const [shops, setShops] = useState([]);
  const [updateAvailable,setUpdateAvailable]=useState(false);
  const navigate = useNavigate();
  const [selectedShop,setSelectedSHop]=useState(null)
  console.log(Prop)
  useEffect(() => {
    // Fetch shop data from API on component mount
    axios.get('http://localhost:4000/shop/type/' + Prop.data)
      .then((response) => {
        console.log(response)
        setShops(response.data.result)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleOnclick(e) {
    localStorage.setItem('shop_id', e._id);
    navigate('/itemAddingForm')
  }
  function handleOnclick(e) {
    localStorage.setItem('shop_id', e._id);
    navigate('/itemAddingForm')
  }
  function handleOnclickShop(e) {
    localStorage.setItem('shop_id', e._id);
    const formData = new FormData();
    formData.append('shop_id', localStorage.getItem('shop_id'));

    // Fetch shop data from API on component mount
    axios.post('http://localhost:4000/item/shopWise', formData)
      .then((response) => {
        if (response) {
          if (response.data.message !== 'no users with the same name found')
            navigate('/shopView')

        }
      })
      .catch((error) => {
        console.log(error);
      });

  }
  function handleOnclickDelete(row) {
    console.log(row)
    axios.delete('http://localhost:4000/shop/' + row._id).then(response => {
      console.log(response.data);
      window.location.reload();
      // Handle success response
    })
      .catch(error => {
        console.log(error);
        // Handle error response
      });
  }
  function handleOnclickUpdate(e){
     setUpdateAvailable(true);
     setSelectedSHop(e)
  }
   

  const tableRows = shops.map((row, index) => (
  
    <tr key={index} className='shop-table-rows'>
      <td className='table-shop-td'>
        <img src={row.image.url} alt="product" width="100" height="100" />
      </td>
      <td className='table-shop-td-name' >{row.title}</td>
      <td className='table-shop-td' style={{width:"250px"}}><button className='button-shop' onClick={() => handleOnclick(row)}>Add item to shop</button></td>
      <td className='table-shop-td' style={{width:"150px"}}><button className='button-shop' onClick={() => handleOnclickShop(row)}>Show shop</button></td>
      <td className='table-shop-td' style={{width:"150px"}}><button className='button-shop' onClick={() => handleOnclickDelete(row)}>Delete</button></td>
      {!updateAvailable&&<td className='table-shop-td'><button className='button-shop' onClick={() => handleOnclickUpdate(row)}>Update</button></td>}
      {updateAvailable&&selectedShop===row&&<UShop data={row}/>}
    </tr>
      
    
  ));
  console.log(shops)
  return (
    <div className='shop-main-div'>
      <table className='shop-main-table' >
        <thead className='shop-main-head'>
          <tr className='shop-tr'>
            <th className='shop-th'>Logo</th>
            <th className='shop-th'>Shop Name</th>
          </tr >
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    </div>
  );
};

export default ShopList;
