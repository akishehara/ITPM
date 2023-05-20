import {Button, Input, Space} from "antd";
import FormItemLabel from "antd/es/form/FormItemLabel";
import axios from "axios";
import React, {useState} from "react";
import {Select} from 'antd';

function UService(props) {
    console.log(props)

    const [comment1, setComment] = useState({
        SName: props.data.SName,
        CName: props.data.CName,
        ServiceType: props.data.ServiceType,
        province:props.data.province,
        district:props.data.district
    })

    const onChange = (event) => {
        setComment({...comment1, "ServiceType": event})
    };
    const onChangeV = (event) => {
        setComment({...comment1, "district": event})
    };
    const onChangeP = (event) => {
        setComment({...comment1, "province": event})
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.reload()
        console.log(comment1)
        try {
            axios.put('http://localhost:4000/register/service/' + props.data._id, comment1)
                .then(response => {
                    console.log(response.data);

                })
                .catch(error => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
        }
    }
    const onSearch = (value) => {
        console.log('search:', value);
    };

    function handleCaption(event) {
        const value = event.target.value;
        console.log(value);
        // use the value for further processing
        setComment({...comment1, "SName": event.target.value})

    }

    function handleCompany(event) {
        const value = event.target.value;
        console.log(value);
        // use the value for further processing
        setComment({...comment1, "CName": event.target.value})
    }
    function handleCancel(){
        window.location.reload()
    }


    return (
        <div style={{
            marginLeft: "30px",
            marginRight: "10px"
        }}>
            <Input placeholder="Enter Your New Service Name" className="comment-input" onChange={handleCaption}/>
            <Input placeholder="Enter Your New Company Name" className="comment-input" onChange={handleCompany}/>
            <div>

                <Select
                    showSearch
                    placeholder="Select a Type"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                        {
                            value: 'cut and polish',
                            label: 'cut and polish',
                        },
                        {
                            value: 'repairs',
                            label: 'repairs',
                        },
                        {
                            value: ' painting',
                            label: ' painting',
                        },
                    ]}
                style={{
                    width:"100%"
                }}/>
            </div>
            <div>
                <Select
                    showSearch
                    placeholder="Select a District"
                    optionFilterProp="children"
                    onChange={onChangeV}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                        {
                            value: 'Colombo',
                            label: 'Colombo',
                        },
                        {
                            value: 'Gampaha',
                            label: 'Gampaha',
                        },
                        {
                            value: 'Kaluthara',
                            label: 'Kaluthara',
                        },
                        {
                            value: 'Galle',
                            label: 'Galle',
                        },
                        {
                            value: 'Matara',
                            label: 'Matara',
                        },
                        {
                            value: 'Hambantota',
                            label: 'Hambantota',
                        },
                        {
                            value: 'Kandy',
                            label: 'Kandy',
                        },
                        {
                            value: 'Anuradhapura',
                            label: 'Anuradhapura',
                        },
                        {
                            value: 'Puttalam',
                            label: 'Puttalam',
                        }
                    ]}
                    style={{
                        width:"100%",
                        marginTop:"10px"
                    }}/>
            </div>
            <div>
                <Select
                    showSearch
                    placeholder="Select a Province"
                    optionFilterProp="children"
                    onChange={onChangeP}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={[
                        {
                            value: 'Western Province',
                            label: 'Western Province',
                        },
                        {
                            value: 'Southern Province',
                            label: 'Southern Province',
                        },
                        {
                            value: 'Central Province',
                            label: 'Central Province',
                        },

                        {
                            value: 'Uva Province',
                            label: 'Uva Province',
                        }
                        ,
                        {
                            value: 'Sabaragamuwa Province',
                            label: 'Sabaragamuwa Province',
                        }

                    ]}
                    style={{
                        width:"100%",
                        marginTop:"10px"
                    }}/>
            </div>

            <Space direction="horizontal">
                <Button onClick={handleSubmit} className='table-shop-td'>Update</Button>
                <Button onClick={handleCancel} className='table-shop-td'>Cancel</Button>
            </Space>
        </div>
    )

}

export default UService