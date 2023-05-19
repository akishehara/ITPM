import { Button, Space } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import '../WebHome/WebHome.css'
function Map() {
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
                        marginLeft: "700px"
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
                            SignIn
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

            <Space>
                <p style={{
                    color: "white",
                    marginLeft: "30px"
                }}>We are hear to manage your automobile needs</p>
            </Space>
            <div>
                <Button style={{
                    marginLeft: "20px",
                    width: "400px",
                    height: "100px",
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

export default Map;