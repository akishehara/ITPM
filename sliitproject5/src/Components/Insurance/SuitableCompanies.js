import { Card, Space } from "antd";
import jsPDF from "jspdf";
import React from "react";

function SuitableCompanies(props) {
    function redirect(url) {
        window.location.href = url;
    }
    const { data } = props;
    const tableRows = data.map((row, index) => (
        <Space key={index} direction="vertical" style={{
            marginLeft: "2%",
            marginTop:"1%",
            width:"600px",
            height:"600px"
        }}>
            <Card>
                <Card onClick={() => redirect(row.url)}>
                    <img src={row.image.url} alt="product" width="200" height="200" />
                </Card>
                <Card  style={{
                    marginTop:"1%",
                    fontFamily:"sans-serif",
                    fontSize:"20px"
                }}>{row.title}</Card>
            </Card>

        </Space>
    ));



    return (
        <div id='shop-main-div-vb'>
            <div style={{
               fontFamily:"fantasy",
               backgroundColor:"ActiveBorder",
               display:"flex",
               justifyContent:"center",
               alignItems:"center"
            }}>
                <h1 style={{color:"white"}}>Tailored results for your needs</h1>
            </div>

            <>
                {tableRows}
            </>



        </div>
    );
}

export default SuitableCompanies;
