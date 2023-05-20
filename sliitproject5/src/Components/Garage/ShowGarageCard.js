import React from "react";
import {Card} from "antd";

function ShowGarageCard(prop){
    return(
        <div>
            <Card>
                <h3 className="card-sname">{prop.data.SName}</h3>
                <p className="card-cname" >{prop.data.CName}</p>
                <p className="card-service">{prop.data.ServiceType}</p>
            </Card>
        </div>
    )
}
export default ShowGarageCard
