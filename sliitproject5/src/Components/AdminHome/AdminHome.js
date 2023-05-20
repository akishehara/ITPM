import React, { Component } from 'react'
import '../../Components/ComponentCss/ownerHome.css'
import { Card, Space } from 'antd'
import Navbar from "../navbar_component";

function AdminHomeNew() {
    return (
        <div>
            <Navbar/>
            <Space direction='horizontal' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '60px', marginTop: '50px' }}>
                <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                    <a className='card' href='/adminHomeFuel'>
                        <h3>Create a Fuel Station</h3>
                    </a>
                </Card>
                <Card style={{ width: '430px',backgroundColor:"#8de0d2" }}>
                    <a className='card' href='/shopCount'>
                        <h3>See shop count</h3>
                    </a>
                </Card>
            </Space>

        </div>

    )

}

export default AdminHomeNew