import React, { Component } from 'react'
import './ComponentCss/ownerHome.css'
import { Card, Space } from 'antd'

function OwnerHome() {
    return (

        <div className='userHome'>
            <Space direction='vertical'>
                <Space direction='horizontal' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '60px', marginTop: '50px' }}>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                        <a className='card' href='/createShop'>
                            <h3>Create a Shop</h3>
                        </a>
                    </Card>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                        <a className='card' href='/shopHome'>
                            <h3>View Your Shops</h3>
                        </a>
                    </Card>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                        <a className='card' href='/garageHome'>
                            <h3>Create a Garage</h3>
                        </a>
                    </Card>
                </Space>
        
                <Space direction='horizontal' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '60px', marginTop: '50px' }}>

                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                        <a className='card' href='/createdServices'>
                            <h3>Created Services</h3>
                        </a>
                    </Card>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                        <a className='card' href='/createInsurance'>
                            <h3>Create Your Insurance Company</h3>
                        </a>
                    </Card>
                </Space>
            </Space>

        </div>


    )

}

export default OwnerHome