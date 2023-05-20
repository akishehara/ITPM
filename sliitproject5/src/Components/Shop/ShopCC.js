import { Card, Space } from "antd";
import React from "react";
import ShopList from "../ExistingShop";
import ShopListCC from "../ExsitingShopCC";

function ShopCC() {
    return (
        <div className="vbvbvb">
            <Space direction="vertical"style={{width:"100%"}}>
                <Card>
                    <div style={{width:"100%",
                        fontSize:"30px",
                        fontFamily:"sans-serif"
                  }}>Tyre Shops</div>
                    <ShopListCC data="Tyre"/>
                </Card>
                <Card style={{width:"100%",
                    fontSize:"30px",
                    fontFamily:"sans-serif"
                  }}>
                    Oil Shops
                    <ShopListCC data="Oil"/>
                </Card>
                <Card style={{width:"100%",
                    fontSize:"30px",
                    fontFamily:"sans-serif"
                  }}>
                    Battery Shops
                    <ShopListCC data="Battery"/>
                </Card>
            </Space>
        </div>
    )
}

export default ShopCC