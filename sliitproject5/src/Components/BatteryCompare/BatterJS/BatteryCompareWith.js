import React from "react";
import BatterComparision from "./BatterComparision";
import './BatteryCSS/batterycompare.css'

function BatteryCompareWith() {
    return (
        <div style={{marginLeft:"30px"}}>
            <h2 className="head-battery">Battery Comparision</h2>
            <h3 style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>Choose two batteries to compare</h3>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <BatterComparision style={{ flex: 1, width: "500px" }}  />
                <BatterComparision style={{ flex: 1, width: "500px" }} />
            </div>


        </div>
    )

}
export default BatteryCompareWith