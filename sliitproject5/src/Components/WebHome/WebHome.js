import { Button, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import '../WebHome/WebHome.css'
function WebHome() {
    const navigate = useNavigate()

    function navigateToSignUp() {
        navigate('/signup')
    }
    function navigateToLogin() {
        navigate('/signin')
    }

    return (
        <div className="WebHome">
            <div style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)"
            }}>
                <Space direction="horizontal">
                    <h1 style={{
                        color: "white",
                        marginLeft: "30px",
                        fontFamily: "calibri",

                    }}>Wheee Garage</h1>
                    <div style={{
                        marginLeft: "700px",
                        marginBottom:"20px"
                    }}>
                        <Button style={{
                            marginLeft: "30px",
                            radious: "20px",
                            backgroundColor: "#123456", // set the default background color
                            color: "#ffffff", // set the default text color
                            transition: "background-color 0.3s ease-in-out", // add a smooth transition
                        }}
                            className="btn_home"
                            onClick={() => navigateToLogin()}>
                            Login
                        </Button>
                        <Button style={{
                            marginLeft: "30px",
                            radious: "20px",
                            backgroundColor: "#123456", // set the default background color
                            color: "#ffffff", // set the default text color
                            transition: "background-color 0.3s ease-in-out", // add a smooth transition
                        }} className="btn_home"
                            onClick={() => navigateToSignUp()}>
                            SignUp
                        </Button>
                        <Button style={{
                            marginLeft: "30px",
                            radious: "20px",
                            backgroundColor: "#123456", // set the default background color
                            color: "#ffffff", // set the default text color
                            transition: "background-color 0.3s ease-in-out", // add a smooth transition
                        }} className="btn_home"
                           >
                            Home Page
                        </Button>
                    </div>
                </Space>
            </div>

            <Space  style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white"
            }}>
                <p style={{
                    fontSize:"30px",
                    fontFamily:"sans-serif"
                }}>We are here to manage your automobile needs</p>

            </Space>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Button style={{
                    width: "100px",
                    height: "50px",
                    borderRadius:"20px",
                    backgroundColor: "#123456", // set the default background color
                    color: "#ffffff", // set the default text color
                    transition: "background-color 0.3s ease-in-out", // add a smooth transition

                }}
                    onClick={() => navigateToSignUp()}
                >
                    Get Started
                </Button>
            </div>

        </div>
    )
}

export default WebHome;