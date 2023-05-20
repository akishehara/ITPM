import React, { useState } from "react";
import vehicle1i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic1.jpg'
import vehicle2i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic2.jpg'
import vehicle3i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic3.jpg'
import vehicle4i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic4.jpg'
import vehicle5i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic5.jpg'
import vehicle6i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic6.jpg'
import vehicle7i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic7.jpg'
import vehicle8i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic8.jpg'
import vehicle9i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic9.jpg'
import vehicle10i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic10.jpg'
import vehicle11i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic11.jpg'
import vehicle12i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic12.jpg'
import vehicle13i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic13.jpg'
import vehicle14i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic14.jpg'
import vehicle15i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic15.jpg'
import vehicle16i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic16.jpg'
import vehicle17i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic17.jpg'
import vehicle18i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic18.jpg'
import vehicle19i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic19.jpg'
import vehicle20i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic20.jpg'
import vehicle21i from '../../Components/Tire/TierImages/Tire and oil/Tire pics/pic21.jpg'
import '../../Components/Tire/tire.css'
import { Card, Space } from "antd";

function TireComparision() {
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
        '145/70R12H202CHINA',
        ': LKR 18,525.00',
        'Designed for economic cars with high-cost performance.',
        'The special tread block provide super silence and excellent grip',
        'The silica compound delivers low rolling resistance and fuel efficiency',
        'Optimized outline provides comfortable driving experience',
        'Stable and excellent performance for all season'
    ]
    const vehi2 = [
        '145/70R12E-LOGICSRI LANKA',
        'LKR 18,924.75',
        'Best selling Tyre in Sri Lanka'
    ]
    const vehi3 = [
        '145/70R12 MILAZE',
        ': LKR 17,917.25',
        'Tyres that can go around the world.Twice.',
        'Need tyres that not only run longer than usual but also offer uncompromised safety?',
        'CEAT Milaze X3 is just the right product',
        'These tyres have been specially designed to offer long tread life and superior performance',
        'The innovative tread compound and robust construction minimize tread wear and the tread pattern offers confident wet and dry grip'
    ]
    const vehi4 = [
        '195/55R15 SPORTSWAY',
        'LKR 24,850.00',
        ':* Four wide circumferential tread grooves and lateral grooves with fine sipes provide efficient water evacuation, outstanding wet performance',
        ':* Continuous block patterns on shoulder enhance the ride stability at high speed cornering. The rim protector will protect wheels from curb damage',
        ':* Continuous outside tread blocks enhance excellent performance and precise control when cornering at high speed. The special rib segment design optimize contact pressure distribution, improve road contact area and provide precise control. The serrated groove walls absorb noise and deliver a quieter ride.',
        ':* Special tread compound delivers excellent grip on both dry and wet roads and reduce the rolling resistance to save oil and protect environment',
    ]
    const vehi5 = [
        '195/55R16 BLUTRACHP THAILAND',
        'LKR 41,100.75',
        'Best selling Tyre in Sri Lanka'
    ]
    const vehi6 = [
        '195/65R15SPTRGT1 (INDONESIA)',
        ': LKR 35,900.25',
        'Touring tyre featuring long life, enhanced stability on wet roads',
        'low noise and ride comfort',
        'The tread compound is a combination of 2 types of special polymer to provide enhanced grip and longer life',
        'The construction and contact shape have been enhanced to reduce irregular wear and improve handling.'
    ]
    const vehi7 = [
        '185/70R14 SAFEWAY CHINA',
        'Price: LKR 23,450.00',
        'Other details :  Best selling Tyre in Sri Lanka'
    ]
    const vehi8 = [
        '185/70R14SPTRGT1 (INDONESIA)',
        'Price: LKR 30,100.75',
        'Touring tyre featuring long life, enhanced stability on wet roads, low noise and ride comfort',
        'The tread compound is a combination of 2 types of special polymer to provide enhanced grip and longer life',
        'The construction and contact shape have been enhanced to reduce irregular wear and improve handling'
    ]
    const vehi9 = [
        '185/65R15 K435 KOREA',
        'Price: LKR 33,900.25',
        'Wide lateral grooves incorporated in to the inside blocks deliver hydroplaning resistance for excellent wet handling and braking',
        'Optimal widths and positioning of the three channel grooves ensures excellent performance in wet driving conditions',
        'Wide outer grooves provide maximum water evacuation which promotes wet traction keeping the tyre cooler in the dry.'
    ]
    const vehi10 = [
        '205/75R15C 8PRENERGYWAY 11CHINA',
        'Price: LKR 35,520.00',
        '.Reinforced structure and special abrasion resistant tread compound deliver extra puncture resistance and load bearing capability with more mileage',
        '.Continuous tread patterns on shoulder and solid shoulder ribs responsive handling and even wear',
        '.Three main zigzag grooves combined with lateral blocks provide excellent ride stability and great traction on all kinds of road conditions',
        '.White sidewall rib shows extraordinary appearance'
    ]
    const vehi11 = [
        '205/55R16 TOURING VP PLUS',
        'Price: LKR 37,780.75',
        'Best selling tyre in Sri Lanka'
    ]
    const vehi12 = [
        '205/60R16 CHAMPIRO TOURING A/S',
        'Price: LKR 34,000.25',
        ':  Champiro Touring A/S is an all-season touring tire designed for the latest passenger cars and crossover vehicles',
        ' It combines precise handling and control with a quiet and comfortable ride',
        'Backed by a 60,000 mile limited warranty, the Champiro Touring A/S also delivers great mileage for an outstanding value.'
    ]
    const vehi13 = [
        '215/60R17 SPEEDWAY CHINA',
        'Price: LKR 34,520.00',
        'Four wide circumferential tread grooves deliver the ride stability and offer excellent performance on wet conditions. Improved grooves and bead profile design offer better ride stability, endurance and handling performance',
        'The open shoulder grooves prevent aquaplaning with enhanced wet grip performance and provide excellent water evacuation.Continuous tread blocks on both shoulder give great support to enhance the ride stability when cornering',
        'Variable pitch pattern and solid center ribs improve the ride stability, reduce the noise and deliver a comfortable ride',
        'High-density sipes with special compound deliver a smooth ride and improve traction on dry and wet roads. Jointless nylon band and strong structure design provided the strong carcass to enhance the reliability and Durability'
    ]
    const vehi14 = [
        '215/45R17SPORTSWAY (CHINA)',
        'Price: LKR 27,480.75',
        'Four wide circumferential tread grooves deliver the ride stability and offer excellent performance on wet conditions. Improved grooves and bead profile design offer better ride stability, endurance and handling performance',
        'The open shoulder grooves prevent aquaplaning with enhanced wet grip performance and provide excellent water evacuation.Continuous tread blocks on both shoulder give great support to enhance the ride stability when cornering',
        'Variable pitch pattern and solid center ribs improve the ride stability, reduce the noise and deliver a comfortable ride',
        'High-density sipes with special compound deliver a smooth ride and improve traction on dry and wet roads. Jointless nylon band and strong structure design provided the strong carcass to enhance the reliability and Durability'
    ]
    const vehi15 = [
        '215/65R16SP LM705 JAPAN',
        'Price: LKR 67,900.25',
        'The SP Sport LM704 is the ideal tyre for a wide range of cars with high levels of handling, low noise and excellent wet grip',
        'Delivering improved tread wear thanks to a new innovative silica tread compound and expanded contact area on the road, means you get value for money coupled with performance '
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
        <div className="tier-main-div"  style={{width:"100%",
            height:"1900px"}}>
            <div className="tier-inner-div">
                <h2 className="tier-h2" style={{
                    fontSize:"40px",
                    fontFamily:"sans-serif"
                }}>Find Your Tire</h2>
                <label htmlFor="dropdown" className='labelHead-vehicle' style={{
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
                                    <div className="tier-features">{vehi6[4]}</div>
                                    <div className="tier-features">{vehi6[5]}</div>
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
                                    <div className="tier-features"> {vehi8[3]}</div>
                                    <div className="tier-features"> {vehi8[4]}</div>
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
                    width:"750px"
                 }}>
                    <Card style={{
                         color:"black",
                         fontSize:"40px",
                         display:"flex",
                         justifyContent:"center",
                         alignItems:"center",
                         fontFamily:"fantasy"
                         
                    }}>
                        Engine
                    </Card>
                    <Card style={{
                        color:"Blue",
                        fontSize:"40px",
                        flex:"box",
                        
                    }}>{vehiE4[0]}</Card>
                    <Card style={{
                        color:"Blue",
                        fontSize:"40px",
                        flex:"box",
                        
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
                    width:"750px"
                 }}>
                    <Card style={{
                         color:"black",
                         fontSize:"40px",
                         display:"flex",
                         justifyContent:"center",
                         alignItems:"center",
                         fontFamily:"fantasy"
                         
                    }}>
                        Engine
                    </Card>
                    <Card style={{
                        color:"Blue",
                        fontSize:"40px",
                        flex:"box",
                        
                    }}>{vehiE5[0]}</Card>
                    <Card style={{
                        color:"Blue",
                        fontSize:"40px",
                        flex:"box",
                        
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
                    width:"750px"
                 }}>
                    <Card style={{
                         color:"black",
                         fontSize:"40px",
                         display:"flex",
                         justifyContent:"center",
                         alignItems:"center",
                         fontFamily:"fantasy"
                         
                    }}>
                        Engine
                    </Card>
                    <Card style={{
                        color:"Blue",
                        fontSize:"40px",
                        flex:"box",
                        
                    }}>{vehiE6[0]}</Card>
                    <Card style={{
                        color:"Blue",
                        fontSize:"40px",
                        flex:"box",
                        
                    }}>{vehiE6[1]} </Card>
                 </Space>
                    <div className="card-view-div">
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle16i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi16[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi16[1]}</div>
                                <div className="tier-features">{vehi16[2]}</div>
                                <div className="tier-features">{vehi16[3]}</div>
                                <div className="tier-features">{vehi16[4]}</div>
                                <div className="tier-features">{vehi16[5]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle17i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi17[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi17[1]}</div>
                                <div className="tier-features"> {vehi17[2]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle18i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi18[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi18[1]}</div>
                                <div className="tier-features">{vehi18[2]}</div>
                                <div className="tier-features">{vehi18[3]}</div>
                                <div className="tier-features">{vehi18[4]}</div>
                            </div>
                        </card>
                    </div>
                    </div>
                }
                {vehicle7 &&
                 <div>
                 <Space direction="vertical" style={{
                    width:"750px"
                 }}>
                    <Card style={{
                         color:"black",
                         fontSize:"40px",
                         display:"flex",
                         justifyContent:"center",
                         alignItems:"center",
                         fontFamily:"fantasy"
                         
                    }}>
                        Engine
                    </Card>
                    <Card style={{
                        color:"Blue",
                        fontSize:"40px",
                        flex:"box",
                        
                    }}>{vehiE7[0]}</Card>
                    <Card style={{
                        color:"Blue",
                        fontSize:"40px",
                        flex:"box",
                        
                    }}>{vehiE7[1]} </Card>
                 </Space>
                    <div className="card-view-div">
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle19i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi19[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi19[1]}</div>
                                <div className="tier-features">{vehi19[2]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle20i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi20[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features"> {vehi20[1]}</div>
                                <div className="tier-features"> {vehi20[2]}</div>
                            </div>
                        </card>
                        <card className="card-view-tier">
                            <div className="image-div">
                                <img className="image-tier"
                                    src={vehicle21i}
                                    width='200px'
                                    height='250px' />
                            </div>
                            <div className="tier-details">
                                <div className="tier-features">Name : {vehi21[0]}</div>
                                <div className="tier-features">Other details:</div>
                                <div className="tier-features">{vehi21[1]}</div>
                                <div className="tier-features">{vehi21[2]}</div>
                                <div className="tier-features">{vehi21[3]}</div>
                            </div>
                        </card>
                    </div>
                    </div>
                }
                
            </div>
        </div>
    )
}
export default TireComparision