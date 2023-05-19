import React, { Component } from 'react'
import './ComponentCss/ownerHome.css'
import { Card, Space } from 'antd'

function CustomerHome() {
    return (
        <div>

            <Space direction='vertical'>
                <Space direction='horizontal' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '60px', marginTop: '50px' }}>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                        <a className='card' href='/seeShops'>
                            <h3>Find a Shop</h3>
                        </a>
                    </Card>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                        <a className='card' href='/seeFuel'>
                            <h3>Find a Fuel Station</h3>
                        </a>
                    </Card>
                    <Card style={{ width: '430px' ,backgroundColor:"#8de0d2"}}>
                        <a className='card' href='/tireCompare'>
                            <h3>Tire Compare</h3>
                        </a>
                    </Card>
                </Space>
                <Space direction='horizontal' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '60px', marginTop: '50px' }}>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                        <a className='card' href='/oilCompare'>
                            <h3>Find your oil</h3>
                        </a>
                    </Card>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                    <a className='card' href='/locateMYFuel'>
                        <h3>Locate Fuel Stations near me</h3>
                    </a>
                    </Card>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                    <a className='card' href='/locateMYShop'>
                        <h3>Locate Shop near me</h3>
                    </a>
                    </Card>
                </Space>
                <Space direction='horizontal' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '60px', marginTop: '50px' }}>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                    <a className='card' href='/seeServices'>
                        <h3>Available Services</h3>
                    </a>
                    </Card>
                    <Card style={{ width: '430px' ,backgroundColor:"#8de0d2"}}>
                    <a className='card' href='/batteryCompare'>
                        <h3>Battery Compare</h3>
                    </a>
                    </Card>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                    <a className='card' href='/findInsurance'>
                        <h3>Find Insurance</h3>
                    </a>
                    </Card>
                </Space>
                <Space direction='horizontal' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '60px', marginTop: '50px' }}>
                    <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                    <a className='card' href='/locateGarage'>
                        <h3>Locate Garage</h3>
                    </a>
                    </Card>
                  
                </Space>
                
            </Space>
        </div>
    )


}

export default CustomerHome