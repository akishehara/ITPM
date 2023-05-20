import axios from "axios";
import React, { useEffect, useState } from "react";

function CountWise(Prop) {
    console.log(Prop)
    const [first, setfirst] = useState('')
    useEffect(() => {
        async function getCount() {
            await axios.get('http://localhost:4000/shop/count/' + Prop.data).then(
                u => {
                    setfirst(u.data.count);
                }
            )
        }
        getCount()
    }, [])
    return (
        <div style={{
            width: '800px',
            marginLeft: "800px"
        }}>
            {first}
        </div>
    )
}

export default CountWise