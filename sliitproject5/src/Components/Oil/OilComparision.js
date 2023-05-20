import React, { useState } from "react";
import vehicle1i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic1.png'
import vehicle2i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic2.jpg'
import vehicle3i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic3.png'
import vehicle4i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic4.png'
import vehicle5i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic5.png'
import vehicle6i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic6.png'
import vehicle7i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic7.jpg'
import vehicle8i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic8.jpg'
import vehicle9i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic9.png'
import vehicle10i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic10.png'
import vehicle11i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic11.png'
import vehicle12i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic12.jpg'
import vehicle13i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic13.png'
import vehicle14i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic14.png'
import vehicle15i from '../../Components/Tire/TierImages/Tire and oil/Oil pics/pic15.png'

import '../../Components/Tire/tire.css'
import { Card, Space } from "antd";

function OilComparision() {
    const [selectedOption, setSelectedOption] = useState("Please choose an option");
    const [vehicle1, setvehicle1] = useState(false);
    const [vehicle2, setvehicle2] = useState(false);
    const [vehicle3, setvehicle3] = useState(false);
    const [vehicle4, setvehicle4] = useState(false);
    const [vehicle5, setvehicle5] = useState(false);
    const [vehicle6, setvehicle6] = useState(false);
    const [vehicle7, setvehicle7] = useState(false);
    function handleDropdownChange(event) {
        const vehicle = event.target.value;
        setSelectedOption(vehicle);
        if (vehicle === 'Maruti WagonR') {
            setvehicle1(true)
            setvehicle2(false)
            setvehicle3(false)
            setvehicle4(false)
            setvehicle5(false)
            setvehicle6(false)
            setvehicle7(false)
        }
        if (vehicle === 'Hyundai i20') {
            setvehicle1(false)
            setvehicle2(true)
            setvehicle3(false)
            setvehicle4(false)
            setvehicle5(false)
            setvehicle6(false)
            setvehicle7(false)
        }
        if (vehicle === 'Honda City') {
            setvehicle1(false)
            setvehicle2(false)
            setvehicle3(true)
            setvehicle4(false)
            setvehicle5(false)
            setvehicle6(false)
            setvehicle7(false)
        }
        if (vehicle === 'Hyundai Elantra') {
            setvehicle1(false)
            setvehicle2(false)
            setvehicle3(false)
            setvehicle4(true)
            setvehicle5(false)
            setvehicle6(false)
            setvehicle7(false)
        }
        if (vehicle === 'Toyota Camry') {
            setvehicle1(false)
            setvehicle2(false)
            setvehicle3(false)
            setvehicle4(false)
            setvehicle5(true)
            setvehicle6(false)
            setvehicle7(false)
        }
        if (vehicle === 'Tata Nexon') {
            setvehicle1(false)
            setvehicle2(false)
            setvehicle3(false)
            setvehicle4(false)
            setvehicle5(false)
            setvehicle6(true)
            setvehicle7(false)
        }
        if (vehicle === 'Mahindra XUV300') {
            setvehicle1(false)
            setvehicle2(false)
            setvehicle3(false)
            setvehicle4(false)
            setvehicle5(false)
            setvehicle6(false)
            setvehicle7(true)
        }
    }
    const vehi1 = [
        'MOBIL Super 1000 Mineral Multigrade 10W-30',
        'Price: LKR 14,550.00',
        'Mobil Super 1000 10W-30 and 20W-50 are premium quality mineral motor oils meeting the latest industry engine oil specifications',
        'They are designed to provide a high level of performance and protection under most operating conditions',
        'Mobil Super 1000 is meticulously engineered for today’s tougher engine specifications',
        'It provides very good engine protection and helps promote long engine life.',
        '•	Extended protection against engine wear and deposits formation',
        '•	Engine protection during start up',
        '•	Helps combat sludge'
    ]
    const vehi2 = [
        'MOBIL Super 2000 Semi Synthetic 5W-30',
        'Price: LKR 15,170.00',
        'Mobil Super 2000 products are industry proven so you can trust you will get the performance you want from your vehicle',
        'Mobil Super 2000 5W-20 and 5W-30 contain low friction semi-synthetic formulation which increases engine efficiency and offers greater fuel economy',
        '•	Excellent wear protection',
        '•	Excellent engine cleanliness',
        '•	Excellent high-temperature protection',
        '•	Excellent fuel economy'
    ]
    const vehi3 = [
        'MOBIL Multipurpose ATF',
        'Price: LKR 4,280.00',
        'Mobil Multipurpose ATF is a high performance, automatic transmission fluid designed to meet the service fill requirements for many North American designed vehicles',
        'Mobil Multipurpose ATF provides reliable performance including smooth & consistent all weather shifting and all-around lubrication protection of the transmission components',
        'Use of Mobil Multipurpose ATF can lead to dependable longer transmission service life and a smooth driving experience',
    ]
    const vehi4 = [
        'MOBIL 1 Synthetic ATF 1L',
        'Price: LKR 13,040.00',
        'Mobil 1 Synthetic ATF is a multi-vehicle, fully synthetic automatic transmission fluid that outperforms conventional automatic transmission fluids and offers exceptional thermal stability.',
        'Mobil 1 Synthetic ATF is engineered to help:',
        '•	Provide outstanding resistance to oil breakdown and deposits',
        '•	Improve overall transmission durability and cleanliness',
        'Mobil 1 Synthetic ATF is a multi-vehicle formula recommended by ExxonMobil for use in:',
        '•	High-performance automobiles',
        '•	SUVs',
        '•	SUTs',
        '•	Vans and other light trucks'
    ]
    const vehi5 = [
        'MOBIL 1 Fully Synthetic 0W-20',
        'Price: LKR 9,170.00',
        'Mobil 1 0W-20 is engineered with a proprietary blend of high performance synthetic basestocks fortified with a precisely balanced component additive system',
        'The low viscosity, advanced full synthetic formulation helps to increase engine efficiency and improve fuel economy',
        'Mobil 1 0W-20 provides the high-temperature protection of higher viscosity oils while offering the best fuel economy in the Mobil 1 line.'
    ]
    const vehi6 = [
        'MOBIL Multipurpose ATF',
        'Price: LKR 5,980.00',
        'Mobil Delvac 1340 is a high performance, heavy duty diesel engine oils formulated from advanced technology base oils and a balanced additive system.',
        'It is specifically engineered for performance in intercooled, turbo-charged engines operating under severe on and off highway conditions.Mobil Delvac 1300 monogrades are used in a wide range of applications where a monograde lubricant is recommended.',
    ]
    const vehi7 = [
        'MOBIL 1 Fully Synthetic 5W-30',
        'Price: LKR 36,980.00',
        'Mobil 1 5W-30 is made with a proprietary blend of high performance synthetic basestocks fortified with a precisely balanced component system',
        'cleaning power and engine protection, while meeting the demanding ILSAC GF-5 performance standards'
    ]
    const vehi8 = [
        'MOBIL Super Extra 4T 10W-40 1L (Semi Synthetic)',
        'Price: LKR 3,980.00',
        'Mobil Extra 4T is a high-performance, semi-synthetic blend technology four-stroke motorcycle engine oil developed to provide boosted engine cleanliness and protection for all types of motorcycles and operations',
    ]
    const vehi9 = [
        'MOBIL 1 Fully Synthetic 5W-50',
        'Price: LKR 36,980.00',
        'Mobil 1 5W-50 Advanced Full Synthetic Motor Oil is our tried and trusted formulation delivering great all-round performance',
        'Mobil 1 5W-50 keeps your engine performing like new. This race-proven technology is suited for extreme driving conditions and motorsport applications.',
    ]
    const vehi10 = [
        'MOBIL 1 Fully Synthetic Racing 4T 10W-40',
        'Price: LKR 36,980.00',
        'Mobil 1 Racing 4T is an advanced four-stroke motorcycle engine oil. This product helps to provide anoutstanding level of performance in today’s high performance motorcycles',
        'It will help keep 4-stroke engines running clean protecting even in extreme operating conditions',
    ]
    const vehi11 = [
        'MOBIL Mineral Multigrade Super 4T 20W-50',
        'Price: LKR 3,980.00',
        'Mobil Super 4T 20W-50 is a high performance conventional four-stroke motorcycle engine oil primarily intended for general use in all types of four-stroke motorcycles and engines'
    ]
    const vehi12 = [
        'MOBIL 1 Fully Synthetic 5W-50',
        'Price: LKR 36,980.00',
        'Mobil 1 5W-50 Advanced Full Synthetic Motor Oil is our tried and trusted formulation delivering great all-round performance',
        'Mobil 1 5W-50 keeps your engine performing like new',
        'This race-proven technology is suited for extreme driving conditions and motorsport applications',
        'Racing or normal driving, Mobil 1 5W-50 (Rally Formula) helps to provide heavy-duty engine performance and protection for an outstanding driving experience'
    ]
    const vehi13 = [
        'MOBIL 1 Fully Synthetic 0W-40',
        'Price: LKR 38,870.00',
        'Mobil 1™ 0W-40 European Car Formula (North America) or Protection Formula (rest of the World) Advanced Full Synthetic Motor Oil is engineered for the latest gasoline and diesel (without Diesel Particulate Filters or DPFs) engine technology delivering excellent all-round performance. It provides exceptional cleaning power',
        'wear protection and overall performance. Mobil 1 0W-40 keeps your engine running like new in all driving conditions',
    
    ]
    const vehi14 = [
        'MOBIL ATF 3309 1L',
        'Price: LKR 5,980.00',
        'Mobil ATF™ 3309 is an exceptionally high-performance lubricant that meets original equipment manufacturers’ specifications for use in certain slip-controlled lock-up automatic transmissions',
    ]
    const vehi15 = [
        'MOBIL Mineral Multigrade Super 4T 20W-50',
        'Price: LKR 3,980.00',
        'Mobil Super 4T 20W-50 is a high performance conventional four-stroke motorcycle engine oil primarily intended for general use in all types of four-stroke motorcycles and engines',
    ]
    const vehi16 = [
        '195/55R15 SPORTSWAY',
        'LKR 24,850.00',
        'Four wide circumferential tread grooves and lateral grooves with fine sipes provide efficient water evacuation, outstanding wet performance',
        '.Continuous block patterns on shoulder enhance the ride stability at high speed cornering. The rim protector will protect wheels from curb damage',
        'Continuous outside tread blocks enhance excellent performance and precise control when cornering at high speed. The special rib segment design optimize contact pressure distribution, improve road contact area and provide precise control. The serrated groove walls absorb noise and deliver a quieter ride',
        'Special tread compound delivers excellent grip on both dry and wet roads and reduce the rolling resistance to save oil and protect environment'
    ]
    const vehi17 = [
        '195/55R16 BLUTRACHP THAILAND',
        'Price: LKR 47,180.75',
        'Best selling tyre in Sri Lanka'
    ]
    const vehi18 = [
        '195/65R15 TECHNO ( THAILAND)',
        'Price: LKR 39,900.25',
        'Every drive is a safe and reliable with TECHNO tyres. Ideal choice for small to mid-sized passenger cars with basic entry level performance and economical vale',
        'Now everyone can drive with tyres that deliver reliable quality and good performance on wet conditions',
        'Optimized sipe angle and lug effectively prevent tyre deformation and enhances water channeling to resist hydroplaning for your safety on wet roads.'
    ]
    const vehi19 = [
        '235/75R15 ALL TERRAIN AK3 CHINA',
        'Price: LKR 53,990.00',
        'Best selling Tyre in Sri Lanka'
    ]
    const vehi20 = [
        '235/60R18 HPM3',
        'LKR 67,200.75',
        'Best selling tyre in Sri Lanka'
    ]
    const vehi21 = [
        '235/60R18HP7CHINA',
        'Price: LKR 54,210.25',
        'The new HP7 series brings about excellent handling, stability and comfort. Increasing the tire grounding area making it more quiet and smooth',
        'Suitable for wet weather.'
    ]
    const vehiE1 = [
        "1.2-litre",
        "4-cylinder"
    ]
    const vehiE2 = [
        "1.2-litre/1.5-litre",
        "4-cylinder"
    ]
    const vehiE3 = [
        "1.5-litre",
        "4-cylinder"
    ]
    const vehiE4 = [
        "2-litre/1.5-litre",
        "4-cylinder"
    ]
    const vehiE5 = [
        "2.5-litre",
        "4-cylinder"
    ]
    const vehiE6 = [
        "1.5-litre",
        "4-cylinder"
    ]
    const vehiE7 = [
        "1.5-litre",
        "4-cylinder"
    ]

    return (
        <div className="tier-main-div" style={{width:"100%",
            height:"1900px"}}>
            <div className="tier-inner-div">
                <h2 className="tier-h2" style={{
                    fontSize:"40px",
                    fontFamily:"sans-serif"
                }}>Find Your Oil</h2>
                <label htmlFor="dropdown" className='labelHead-oil' style={{
                    fontSize:"30px"
                }}>Select Your Car</label>
                <select id="dropdown" value={selectedOption} onChange={handleDropdownChange} style={{
                    marginTop:"30px"
                }}>
                    <option value="">--Please choose an option--</option>
                    <option value="Maruti WagonR">Maruti WagonR</option>
                    <option value="Hyundai i20">Hyundai i20</option>
                    <option value="Honda City">Honda City</option>
                    <option value="Hyundai Elantra">Hyundai Elantra</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="Tata Nexon">Tata Nexon</option>
                    <option value="Mahindra XUV300">Mahindra XUV300</option>
                </select>
            </div>
            <div>
                {vehicle1 &&
                <div>
                <Space direction="vertical" style={{
                    width: "750px"
                }}>
                    <Card style={{
                        color: "black",
                        fontSize: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "fantasy"

                    }}>
                        Engine
                    </Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE1[0]}</Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE1[1]} </Card>
                </Space>
                    <div className="card-view-div">
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle1i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi1[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi1[1]}</div>
                                <div className="tier-features"> {vehi1[2]}</div>
                                <div className="tier-features">{vehi1[3]}</div>
                                <div className="tier-features">{vehi1[4]}</div>
                                <div className="tier-features">{vehi1[5]}</div>
                                <div className="tier-features">{vehi1[6]}</div>
                                <div className="tier-features">{vehi1[7]}</div>
                                <div className="tier-features">{vehi1[8]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle2i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi2[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi2[1]}</div>
                                <div className="tier-features"> {vehi2[2]}</div>
                                <div className="tier-features"> {vehi2[3]}</div>
                                <div className="tier-features"> {vehi2[4]}</div>
                                <div className="tier-features"> {vehi2[5]}</div>
                                <div className="tier-features"> {vehi2[6]}</div>
                                <div className="tier-features"> {vehi2[7]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle3i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi3[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi3[1]}</div>
                                <div className="tier-features"> {vehi3[2]}</div>
                                <div className="tier-features">{vehi3[3]}</div>
                                <div className="tier-features">{vehi3[4]}</div>
                                <div className="tier-features">{vehi3[5]}</div>
                                <div className="tier-features">{vehi3[6]}</div>
                                <div className="tier-features">{vehi3[7]}</div>
                                <div className="tier-features">{vehi3[8]}</div>
                                <div className="tier-features">{vehi3[9]}</div>

                            </div>
                        </card>
                    </div>
                    </div>
                }
                {vehicle2 &&
                <div>
                <Space direction="vertical" style={{
                    width: "750px"
                }}>
                    <Card style={{
                        color: "black",
                        fontSize: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "fantasy"

                    }}>
                        Engine
                    </Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE2[0]}</Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE2[1]} </Card>
                </Space>
                    <div className="card-view-div">
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle4i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi4[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi4[1]}</div>
                                <div className="tier-features"> {vehi4[2]}</div>
                                <div className="tier-features">{vehi4[3]}</div>
                                <div className="tier-features">{vehi4[4]}</div>
                                <div className="tier-features">{vehi4[5]}</div>
                                <div className="tier-features">{vehi4[6]}</div>
                                <div className="tier-features">{vehi4[7]}</div>
                                <div className="tier-features">{vehi4[8]}</div>
                                <div className="tier-features">{vehi4[9]}</div>
                                <div className="tier-features">{vehi4[10]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle5i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi5[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi5[1]}</div>
                                <div className="tier-features"> {vehi5[2]}</div>
                                <div className="tier-features"> {vehi5[3]}</div>
                                <div className="tier-features"> {vehi5[4]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle6i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi6[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi6[1]}</div>
                                <div className="tier-features">{vehi6[2]}</div>
                                <div className="tier-features">{vehi6[3]}</div>
                            </div>
                        </card>
                    </div>
                    </div>
                }
                {vehicle3 &&
                <div>
                <Space direction="vertical" style={{
                    width: "750px"
                }}>
                    <Card style={{
                        color: "black",
                        fontSize: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "fantasy"

                    }}>
                        Engine
                    </Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE3[0]}</Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE3[1]} </Card>
                </Space>
                    <div className="card-view-div">
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle7i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi7[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi7[1]}</div>
                                <div className="tier-features"> {vehi7[2]}</div>

                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle8i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi8[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi8[1]}</div>
                                <div className="tier-features"> {vehi8[2]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle9i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi9[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi9[1]}</div>
                                <div className="tier-features">{vehi9[2]}</div>
                                <div className="tier-features">{vehi9[3]}</div>
                                <div className="tier-features">{vehi9[4]}</div>
                            </div>
                        </card>
                    </div>
                    </div>
                }
                {vehicle4 &&
                <div>
                <Space direction="vertical" style={{
                    width: "750px"
                }}>
                    <Card style={{
                        color: "black",
                        fontSize: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "fantasy"

                    }}>
                        Engine
                    </Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE4[0]}</Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE4[1]} </Card>
                </Space>
                    <div className="card-view-div">
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle10i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi10[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi10[1]}</div>
                                <div className="tier-features">{vehi10[2]}</div>
                                <div className="tier-features">{vehi10[3]}</div>
                                <div className="tier-features">{vehi10[4]}</div>
                                <div className="tier-features">{vehi10[5]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle11i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi11[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi11[1]}</div>
                                <div className="tier-features"> {vehi11[2]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle12i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi12[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi12[1]}</div>
                                <div className="tier-features">{vehi12[2]}</div>
                                <div className="tier-features">{vehi12[3]}</div>
                                <div className="tier-features">{vehi12[4]}</div>
                            </div>
                        </card>
                    </div>
                    </div>
                }
                {vehicle5 &&
                <div>
                <Space direction="vertical" style={{
                    width: "750px"
                }}>
                    <Card style={{
                        color: "black",
                        fontSize: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "fantasy"

                    }}>
                        Engine
                    </Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE5[0]}</Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE5[1]} </Card>
                </Space>
                    <div className="card-view-div">
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle13i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi13[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi13[1]}</div>
                                <div className="tier-features">{vehi13[2]}</div>
                                <div className="tier-features">{vehi13[3]}</div>
                                <div className="tier-features">{vehi13[4]}</div>
                                <div className="tier-features">{vehi13[5]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle14i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi14[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi14[1]}</div>
                                <div className="tier-features"> {vehi14[2]}</div>
                                <div className="tier-features"> {vehi14[3]}</div>
                                <div className="tier-features"> {vehi14[4]}</div>
                                <div className="tier-features"> {vehi14[5]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle15i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi15[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi15[1]}</div>
                                <div className="tier-features">{vehi15[2]}</div>
                                <div className="tier-features">{vehi15[3]}</div>
                            </div>
                        </card>
                    </div>
                    </div>
                }
                {vehicle6 &&
                <div>
                <Space direction="vertical" style={{
                    width: "750px"
                }}>
                    <Card style={{
                        color: "black",
                        fontSize: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "fantasy"

                    }}>
                        Engine
                    </Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE6[0]}</Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE6[1]} </Card>
                </Space>
                    <div className="card-view-div">
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle3i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi3[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi3[1]}</div>
                                <div className="tier-features">{vehi3[2]}</div>
                                <div className="tier-features">{vehi3[3]}</div>
                                <div className="tier-features">{vehi3[4]}</div>
                                <div className="tier-features">{vehi3[5]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle14i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi14[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi14[1]}</div>
                                <div className="tier-features"> {vehi14[2]}</div>
                                <div className="tier-features"> {vehi14[3]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle15i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi15[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi15[1]}</div>
                                <div className="tier-features">{vehi15[2]}</div>
                                <div className="tier-features">{vehi15[3]}</div>
                                <div className="tier-features">{vehi15[4]}</div>
                            </div>
                        </card>
                    </div>
                    </div>
                }
                {vehicle7 &&
                <div>
                <Space direction="vertical" style={{
                    width: "750px"
                }}>
                    <Card style={{
                        color: "black",
                        fontSize: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "fantasy"

                    }}>
                        Engine
                    </Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE7[0]}</Card>
                    <Card style={{
                        color: "Blue",
                        fontSize: "40px",
                        flex: "box",

                    }}>{vehiE7[1]} </Card>
                </Space>
                    <div className="card-view-div">
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle1i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi1[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi1[1]}</div>
                                <div className="tier-features">{vehi1[2]}</div>
                                <div className="tier-features">{vehi1[3]}</div>
                                <div className="tier-features">{vehi1[4]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle7i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi7[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi7[1]}</div>
                                <div className="tier-features"> {vehi7[2]}</div>
                                <div className="tier-features"> {vehi7[3]}</div>
                                <div className="tier-features"> {vehi7[4]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle8i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi8[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi8[1]}</div>
                                <div className="tier-features">{vehi8[2]}</div>
                                <div className="tier-features">{vehi8[3]}</div>
                                <div className="tier-features">{vehi8[4]}</div>
                                <div className="tier-features">{vehi8[5]}</div>
                            </div>
                        </card>
                    </div>
                    </div>
                }
            
            </div>
        </div>
    )
}
export default OilComparision