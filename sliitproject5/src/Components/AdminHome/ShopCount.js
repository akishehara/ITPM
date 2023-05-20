import { isEditable } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CountWise from "./CountWise";
import { Button, Card, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import jsPDF from "jspdf";

function ShopCount() {
    const [owner, setOwner] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        async function fetch() {
            setIsLoading(true)
            await axios.get('http://localhost:4000/register/getAll').then(
                user => {
                    setOwner(user.data.massage);
                    //  for(let i=0;i<user.data.count;i++){
                    //     console.log(user.data.massage[i]._id)
                    //     setOwner(user.data.massage[i]._id);
                    //  }
                    setIsLoading(false)


                }
            )
        }
        fetch()
    }, [])
    if (isLoading) {
        return (<div>
            Loading
        </div>)
    }
    const generatePDF = () => {
        var doc = new jsPDF({
            orientation: "landscape", // set the orientation to landscape
            unit: "pt", // set the unit to points
            format: "a3", // set the page format to A4
            width: 1500 // set the width to 800 points
        });
        doc.html(document.querySelector("#pdf"), {
            callback: function(pdf) {
                pdf.save("mypdf.pdf");
            }
        });
    }
    return (
        <div>
            <div id="pdf">
                <Header style={{
                    color: "white",
                    alignContent: "center",
                    flex: "inline",
                    fontSize: "50px",
                }}>Shop Count</Header>
                <Card style={{
                    width: '1000px',
                    marginLeft: "100px",
                    marginTop:"10px"
                }}>
                    <Space direction='horizontal'
                        style={{
                            width: '1000px',
                            fontFamily: 'fantasy',
                            fontSize: "30px"
                        }} >
                        <div > Name</div>
                        <div style={{
                            width: '800px',
                            marginLeft: "750px"
                        }}>Count</div>
                    </Space>
                </Card>
                {owner.map((key, index) => (
                    <Space direction='horizontal' key={index} style={{
                        width: '1000px',
                        marginLeft: "100px"
                    }}>
                        <Card style={{
                            width: '1000px'
                        }}>
                            <Space direction='horizontal' >
                                <div style={{
                                    width: "50px",
                                    fontFamily:'monospace',
                                    fontSize: "20px"
                                }}>{key.Name}</div>
                                <div><CountWise data={key._id} /></div>
                            </Space>
                        </Card>
                    </Space>
                ))}
            </div>
            <Button onClick={generatePDF} className='pdf-download' style={{
                marginLeft:"550px"
            }}>Download Report</Button>
                      
        </div>
    )

}

export default ShopCount