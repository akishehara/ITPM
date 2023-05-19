import React,{Component} from 'react'
import './ComponentCss/navbar.css'
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

export default function Navbar(){
    const navigate=useNavigate();
    function buttonLog(){
        navigate('/signin')
    }
    function buttonHome(){
      navigate('/')
  }
        return(
            <nav>
            <ul style={{height:"70px"}}>
              <Button onClick={()=>buttonHome()}>Home</Button>
              <Button style={{marginLeft:"30px"}} onClick={()=>buttonLog()}>LogOut</Button>
            </ul>
          </nav>
        )

}