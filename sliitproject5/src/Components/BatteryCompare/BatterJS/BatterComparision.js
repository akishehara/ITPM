import React, { useState } from "react";
import pic11 from '../battry picsx/pic 1.jpg'
import pic22 from '../battry picsx/pic 2.jpg'
import pic33 from '../battry picsx/pic 3.jpg'
import pic44 from '../battry picsx/pic 4.jpg'
import pic55 from '../battry picsx/PIC 5.jpg'
import pic66 from '../battry picsx/pic 6.jpg'
import pic77 from '../battry picsx/pic 7.jpg'
import pic88 from '../battry picsx/pic 8.jpg'
import pic99 from '../battry picsx/pic 9.jpg'
import pic100 from '../battry picsx/pic 10.jpg'
import pic111 from '../battry picsx/pic 11.jpg'
import greenTick from '../battry picsx/green_tick.png'
import redcross from '../battry picsx/redcross.jpg'
import './BatteryCSS/batter.css'

function BatterComparision() {
    const BatterNames = ['Please Choose a battery', 'EX3WBMF1YR (35ah)', 'EXMFDIN442YR (44ah)', 'EXDIN100LMF5YR (100ah)', 'EXADNN100LMF5YR (100ah)', 'EXMF1501YR (150ah)',
        'AMNT700E41RHIWAY2YR (100ah)', 'AMTRA600H29RLHARVEST2YR (90ah)', 'AMNT800F51RHIWAY2YR (130ah)', 'AMGR700E41RHIWAY2YR (100ah)',
        'AMGT700E41RHIWAY2YR (100ah)', 'AMNT YTX9-BSMF1YRTHAILAND'
    ];
    const Battery1 = [
        'EXIDE',
        '3WB-MF',
        '1 YEAR ',
        '12 v',
        '35 Ah',
        'This price does not include tire service or disposal fees or any applicable state environmental tax.Actual tire may vary from displayed image.',
        '18000.00',
        'Unavailble'
    ]
    const Battery2 = [
        'EXIDE',
        '2WB-MF',
        '2 YEAR ',
        '12 v',
        '44 Ah',
        'This price does not include tire service or disposal fees or any applicable state environmental tax.Actual tire may vary from displayed image.',
        '57500.00',
        'availble'
    ]
    const Battery3 = [
        'EXIDE',
        '2WBC-MF',
        '5 YEAR',
        '12 v',
        '100 Ah',
        'This price does not include tire service or disposal',
        '123,000.00',
        'availble'
    ]
    const Battery4 = [
        'EXIDE',
        '2WBC',
        '5 YEAR + 2 Year service ',
        '12 v',
        '100 Ah',
        'This price does not include tire service or disposal fees or any applicable state environmental tax.Actual tire may vary from displayed image.',
        '143,000.00',
        'availble'
    ]
    const Battery5 = [
        'EXIDE',
        'MF 150',
        '1 YEAR',
        '12 v',
        '150 Ah',
        'This price does not include tire service or disposal fees or any applicable state environmental tax.Actual tire may vary from displayed image.',
        '86000.00',
        'Unavailble'
    ]
    const Battery6 = [
        'amaron',
        'NT700E41R- HI-WAY',
        '2 YEAR ',
        '12 v',
        '100 Ah',
        'This price does not include tire service or disposal fees or any applicable state environmental tax.Actual tire may vary from displayed image.',
        '67000.00',
        'availble'
    ]
    const Battery7 = [
        'TRA600H29R/L- HARVEST',
        '3WB-MF',
        '2 YEAR ',
        '12 v',
        '90 Ah',
        'This price does not include tire service or disposal fees or any applicable state environmental tax.Actual tire may vary from displayed image.',
        '57000.00',
        'availble'
    ]
    const Battery8 = [
        'amaron',
        'NT800F51R HI-WAY',
        '2 YEAR ',
        '12 v',
        '130 Ah',
        'no                                                                                                                                              ',
        '85000.00',
        'availble'
    ]
    const Battery9 = [
        'Emtrace',
        'NT700E41R- HI-WAY',
        '3 YEAR ',
        '12 v',
        '100 Ah',
        'This price does not include tire service or disposal fees or any applicable state environmental tax.Actual tire may vary from displayed image.',
        '67000.00',
        'availble'
    ]
    const Battery10 = [
        'Black',
        'BH95D26L/R',
        '3 YEAR + 1 Year Pro Rata',
        '12 v',
        '70 Ah',
        'This price does not include tire service or disposal fees or any applicable state environmental tax.Actual tire may vary from displayed image.',
        '67000.00',
        'availble'
    ]
    const Battery11 = [
        'Leadz',
        'NT700E41R- HI-WAY',
        '2 YEAR',
        '12 v',
        '100 Ah',
        'This price does not include tire service or disposal fees or any applicable state environmental tax.Actual tire may vary from displayed image.',
        '67000.00',
        'availble'
    ]
    const [pic1, setPic1] = useState(false);
    const [pic2, setPic2] = useState(false);
    const [pic3, setPic3] = useState(false);
    const [pic4, setPic4] = useState(false);
    const [pic5, setPic5] = useState(false);
    const [pic6, setPic6] = useState(false);
    const [pic7, setPic7] = useState(false);
    const [pic8, setPic8] = useState(false);
    const [pic9, setPic9] = useState(false);
    const [pic10, setPic10] = useState(false);
    const [pic11, setPic11] = useState(false);


    const [selectedOption, setSelectedOption] = useState("Please choose a battery");
    function handleDropdownChange(event) {
        const battery = event.target.value;
        setSelectedOption(battery);
        if (battery === 'EX3WBMF1YR (35ah)') {
            setPic1(true);
            setPic2(false)
            setPic3(false)
            setPic4(false)
            setPic5(false)
            setPic6(false)
            setPic7(false)
            setPic8(false)
            setPic9(false)
            setPic10(false)
            setPic11(false)
        }
        else if (battery === 'EXMFDIN442YR (44ah)') {
            setPic1(false);
            setPic2(true)
            setPic3(false)
            setPic4(false)
            setPic5(false)
            setPic6(false)
            setPic7(false)
            setPic8(false)
            setPic9(false)
            setPic10(false)
            setPic11(false)

        }
        else if (battery === 'EXDIN100LMF5YR (100ah)') {
            setPic1(false);
            setPic2(false)
            setPic3(true)
            setPic4(false)
            setPic5(false)
            setPic6(false)
            setPic7(false)
            setPic8(false)
            setPic9(false)
            setPic10(false)
            setPic11(false)

        }
        else if (battery === 'EXADNN100LMF5YR (100ah)') {
            setPic1(false);
            setPic2(false)
            setPic3(false)
            setPic4(true)
            setPic5(false)
            setPic6(false)
            setPic7(false)
            setPic8(false)
            setPic9(false)
            setPic10(false)
            setPic11(false)

        }
        else if (battery === 'EXMF1501YR (150ah)') {
            setPic1(false);
            setPic2(false)
            setPic3(false)
            setPic4(false)
            setPic5(true)
            setPic6(false)
            setPic7(false)
            setPic8(false)
            setPic9(false)
            setPic10(false)
            setPic11(false)

        }
        else if (battery === 'AMNT700E41RHIWAY2YR (100ah)') {
            setPic1(false);
            setPic2(false)
            setPic3(false)
            setPic4(false)
            setPic5(false)
            setPic6(true)
            setPic7(false)
            setPic8(false)
            setPic9(false)
            setPic10(false)
            setPic11(false)

        }
        else if (battery === 'AMTRA600H29RLHARVEST2YR (90ah)') {
            setPic1(false);
            setPic2(false)
            setPic3(false)
            setPic4(false)
            setPic5(false)
            setPic6(false)
            setPic7(true)
            setPic8(false)
            setPic9(false)
            setPic10(false)
            setPic11(false)

        }
        else if (battery === 'AMNT800F51RHIWAY2YR (130ah)') {
            setPic1(false);
            setPic2(false)
            setPic3(false)
            setPic4(false)
            setPic5(false)
            setPic6(false)
            setPic7(false)
            setPic8(true)
            setPic9(false)
            setPic10(false)
            setPic11(false)

        }
        else if (battery === 'AMGR700E41RHIWAY2YR (100ah)') {
            setPic1(false);
            setPic2(false)
            setPic3(false)
            setPic4(false)
            setPic5(false)
            setPic6(false)
            setPic7(false)
            setPic8(false)
            setPic9(true)
            setPic10(false)
            setPic11(false)

        }
        else if (battery === 'AMGT700E41RHIWAY2YR (100ah)') {
            setPic1(false);
            setPic2(false)
            setPic3(false)
            setPic4(false)
            setPic5(false)
            setPic6(false)
            setPic7(false)
            setPic8(false)
            setPic9(false)
            setPic10(true)
            setPic11(false)

        }
        else if (battery === 'AMNT YTX9-BSMF1YRTHAILAND') {
            setPic1(false);
            setPic2(false)
            setPic3(false)
            setPic4(false)
            setPic5(false)
            setPic6(false)
            setPic7(false)
            setPic8(false)
            setPic9(false)
            setPic10(false)
            setPic11(true)

        }
    }

    return (
        <div style={{marginRight:"30px"}}>

            <select id="dropdown-value-battery" value={selectedOption} onChange={handleDropdownChange} style={{marginLeft:"30px",}}>
                {BatterNames.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            
            {pic1 &&
                <card className='battery-compare-card'>
                    <img
                        className='fuelImage'
                        src={pic22}
                        alt="Image Description"
                    />
                    <div className="battery-com">Category:{Battery1[0]}</div>
                    <div className="battery-com">Type:{Battery1[1]}</div>
                    <div className="battery-com">warranty :{Battery1[2]}</div>
                    <div className="battery-com">Voltage:{Battery1[3]}</div>
                    <div className="battery-com">Current:{Battery1[4]}</div>
                    <div className="battery-com" >Other cost:{Battery1[5]}</div>
                    <div className="battery-com">Price:{Battery1[6]}</div>
                    <div className="battery-com">Installment plans  :{Battery1[7]}
                        <img

                            src={redcross}
                            width='20'
                            height='20'
                            alt="Image Description"
                        />
                    </div>
                </card>
            }
            {pic2 &&
                <card className='battery-compare-card'>
                    <img
                        className='fuelImage'
                        src={pic22}
                        alt="Image Description"
                    />
                    <div className="battery-com">Category:{Battery2[0]}</div>
                    <div className="battery-com">Type:{Battery2[1]}</div>
                    <div className="battery-com">warranty :{Battery2[2]}</div>
                    <div className="battery-com">Voltage:{Battery2[3]}</div>
                    <div className="battery-com">Current:{Battery2[4]}</div>
                    <div className="battery-com">Other cost:{Battery2[5]}</div>
                    <div className="battery-com">Price:{Battery2[6]}</div>
                    <div className="battery-com">Installment plans  :{Battery2[7]}
                        <img

                            src={greenTick}
                            width='20'
                            height='20'
                            alt="Image Description"
                        />
                    </div>
                </card>
            }
            {pic3 &&
                <card className='battery-compare-card'>
                    <img
                        className='fuelImage'
                        src={pic33}
                        alt="Image Description"
                    />
                    <div className="battery-com">Category:{Battery3[0]}</div>
                    <div className="battery-com">Type:{Battery3[1]}</div>
                    <div className="battery-com">warranty :{Battery3[2]}</div>
                    <div className="battery-com">Voltage:{Battery3[3]}</div>
                    <div className="battery-com">Current:{Battery3[4]}</div>
                    <div className="battery-com" style={{width:'950'}}>Other cost:{Battery3[5]}</div>
                    <div className="battery-com">Price:{Battery3[6]}</div>
                    <div className="battery-com">Installment plans  :{Battery3[7]}
                        <img

                            src={greenTick}
                            width='20'
                            height='20'
                            alt="Image Description"
                        /> </div>
                </card>
            }
            {pic4 &&
                <card className='battery-compare-card'>
                    <img
                        className='fuelImage'
                        src={pic44}
                        alt="Image Description"
                    />
                    <div className="battery-com">Category:{Battery4[0]}</div>
                    <div className="battery-com">Type:{Battery4[1]}</div>
                    <div className="battery-com">warranty :{Battery4[2]}</div>
                    <div className="battery-com">Voltage:{Battery4[3]}</div>
                    <div className="battery-com">Current:{Battery4[4]}</div>
                    <div className="battery-com">Other cost:{Battery4[5]}</div>
                    <div className="battery-com">Price:{Battery4[6]}</div>
                    <div className="battery-com">Installment plans  :{Battery4[7]}
                        <img

                            src={greenTick}
                            width='20'
                            height='20'
                            alt="Image Description"
                        /></div>
                </card>
            }
            {pic5 &&
                <card className='battery-compare-card'>
                    <img
                        className='fuelImage'
                        src={pic55}
                        alt="Image Description"
                    />
                    <div className="battery-com">Category:{Battery5[0]}</div>
                    <div className="battery-com">Type:{Battery5[1]}</div>
                    <div className="battery-com">warranty :{Battery5[2]}</div>
                    <div className="battery-com">Voltage:{Battery5[3]}</div>
                    <div className="battery-com">Current:{Battery5[4]}</div>
                    <div className="battery-com">Other cost:{Battery5[5]}</div>
                    <div className="battery-com">Price:{Battery5[6]}</div>
                    <div className="battery-com">Installment plans  :{Battery5[7]}
                        <img
                            src={redcross}
                            width='20'
                            height='20'
                            alt="Image Description"
                        />
                    </div>
                </card>
            }
            {pic6 &&
                <card className='battery-compare-card'>
                    <img
                        className='fuelImage'
                        src={pic66}
                        alt="Image Description"
                    />
                    <div className="battery-com">Category:{Battery6[0]}</div>
                    <div className="battery-com">Type:{Battery6[1]}</div>
                    <div className="battery-com">warranty :{Battery6[2]}</div>
                    <div className="battery-com">Voltage:{Battery6[3]}</div>
                    <div className="battery-com">Current:{Battery6[4]}</div>
                    <div className="battery-com">Other cost:{Battery6[5]}</div>
                    <div className="battery-com">Price:{Battery6[6]}</div>
                    <div className="battery-com">Installment plans  :{Battery6[7]}
                        <img

                            src={greenTick}
                            width='20'
                            height='20'
                            alt="Image Description"
                        /></div>
                </card>
            }
            {pic7 &&
                <card className='battery-compare-card'>
                    <img
                        className='fuelImage'
                        src={pic77}
                        alt="Image Description"
                    />
                    <div className="battery-com">Category:{Battery7[0]}</div>
                    <div className="battery-com">Type:{Battery7[1]}</div>
                    <div className="battery-com">warranty :{Battery7[2]}</div>
                    <div className="battery-com">Voltage:{Battery7[3]}</div>
                    <div className="battery-com">Current:{Battery7[4]}</div>
                    <div className="battery-com">Other cost:{Battery7[5]}</div>
                    <div className="battery-com">Price:{Battery7[6]}</div>
                    <div className="battery-com">Installment plans  :{Battery7[7]}
                        <img

                            src={greenTick}
                            width='20'
                            height='20'
                            alt="Image Description"
                        /></div>
                </card>
            }
            {pic8 &&
                <card className='battery-compare-card'>
                    <img
                        className='fuelImage'
                        src={pic88}
                        alt="Image Description"
                    />
                    <div className="battery-com">Category:{Battery8[0]}</div>
                    <div className="battery-com">Type:{Battery8[1]}</div>
                    <div className="battery-com">warranty :{Battery8[2]}</div>
                    <div className="battery-com">Voltage:{Battery8[3]}</div>
                    <div className="battery-com">Current:{Battery8[4]}</div>
                    <div className="battery-com">Other cost:{Battery8[5]}</div>
                    <div className="battery-com">Price:{Battery8[6]}</div>
                    <div className="battery-com">Installment plans  :{Battery8[7]}
                        <img

                            src={greenTick}
                            width='20'
                            height='20'
                            alt="Image Description"
                        /></div>
                </card>
            }
            {pic9 &&
                <card className='battery-compare-card'>
                    <img
                        className='fuelImage'
                        src={pic99}
                        alt="Image Description"
                    />
                    <div className="battery-com">Category:{Battery9[0]}</div>
                    <div className="battery-com">Type:{Battery9[1]}</div>
                    <div className="battery-com">warranty :{Battery9[2]}</div>
                    <div className="battery-com">Voltage:{Battery9[3]}</div>
                    <div className="battery-com">Current:{Battery9[4]}</div>
                    <div className="battery-com">Other cost:{Battery9[5]}</div>
                    <div className="battery-com">Price:{Battery9[6]}</div>
                    <div className="battery-com">Installment plans  :{Battery9[7]}
                        <img

                            src={greenTick}
                            width='20'
                            height='20'
                            alt="Image Description"
                        />
                    </div>
                </card>
            }
            {pic10 &&
                <card className='battery-compare-card'>
                    <img
                        className='fuelImage'
                        src={pic100}
                        alt="Image Description"
                    />
                    <div className="battery-com">Category:{Battery10[0]}</div>
                    <div className="battery-com">Type:{Battery10[1]}</div>
                    <div className="battery-com">warranty :{Battery10[2]}</div>
                    <div className="battery-com">Voltage:{Battery10[3]}</div>
                    <div className="battery-com">Current:{Battery10[4]}</div>
                    <div className="battery-com">Other cost:{Battery10[5]}</div>
                    <div className="battery-com">Price:{Battery10[6]}</div>
                    <div className="battery-com">Installment plans  :{Battery10[7]}
                        <img
                            src={greenTick}
                            width='20'
                            height='20'
                            alt="Image Description"
                        /></div>
                </card>
            }
            {pic11 &&
                <card >
                    <img
                        className='fuelImage'
                        src={pic111}
                        alt="Image Description"
                    />
                    <div className="battery-com">Category:{Battery11[0]}</div>
                    <div className="battery-com">Type:{Battery11[1]}</div>
                    <div className="battery-com">warranty :{Battery11[2]}</div>
                    <div className="battery-com">Voltage:{Battery11[3]}</div>
                    <div className="battery-com">Current:{Battery11[4]}</div>
                    <div className="battery-com">Other cost:{Battery11[5]}</div>
                    <div className="battery-com">Price:{Battery11[6]}</div>
                    <div className="battery-com">Installment plans  :{Battery11[7]}
                        <img
                            src={greenTick}
                            width='20'
                            height='20'
                            alt="Image Description"
                        />
                    </div>
                </card>
            }
        </div>
    )
}

export default BatterComparision