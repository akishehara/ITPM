import axios from "axios";
import jsPDF from "jspdf";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Insurance/owner.css'
import SuitableCompanies from "./SuitableCompanies";

function CustomerFindInsurance() {
    const [selectedOption, setSelectedOption] = useState("Please choose an option");
    const [Insurance, setInsurance] = useState([])
    const [isAvailable, setIsAvailable] = useState(false)
    const [brand, setBrand] = useState('Please choose an option')
    const navigate = useNavigate();
    const fuelStationAddFormRef = useRef(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('comprehensive', comprehensive)
            formData.append('Tier', Tier)
            formData.append('Rapid', Rapid)
            formData.append('Virtual', Virtual)
            formData.append('Extensive', Extensive)
            formData.append('NoCbonus', NoCbonus)
            formData.append('freeLife', freeLife)
            formData.append('OnSite', OnSite)
            formData.append('DirectSettle', DirectSettle)
            formData.append('Extentions', Extentions)
            formData.append('FuneralExpense', FuneralExpense)
            formData.append('AccInjury', AccInjury)
            formData.append('Air', Air)
            formData.append('WildScreen', WildScreen)
            formData.append('Call', Call)
            formData.append('AlterTrans', AlterTrans)
            formData.append('AlterVehicle', AlterVehicle)
            formData.append('ThirdParty', ThirdParty)
            formData.append('Surgery', Surgery)
            formData.append('DamagedKey', DamagedKey)
            formData.append('Freesound', Freesound)
            formData.append('BackTo', BackTo)
            formData.append('OptionsOf', OptionsOf)
            formData.append('Baby', Baby)
            formData.append('Agift', Agift)
            formData.append('FreePersonal', FreePersonal)
            formData.append('Other', Other)
            formData.append('Online', Online)
            formData.append('FreeTowing', FreeTowing)
            formData.append('DoorStep', DoorStep)
            console.log(formData)
            if (brand.length > 0 && selectedOption.length) {
                const response = await axios.post('http://localhost:4000/insurance/find', formData)
                console.log(response)
                setInsurance(response.data)
                setIsAvailable(true)
                fuelStationAddFormRef.current.scrollIntoView({ behavior: 'smooth' });
            }
            else {
                setIsAvailable(false)
            }

        } catch (error) {

        }

    };
    function handleDropdownChange(event) {
        const provinceValue = event.target.value;
        setSelectedOption(provinceValue);
    }
    function handleBrandChange(event) {
        const provinceValue = event.target.value;
        setBrand(provinceValue);
    }
    const [comprehensive, setcomprehensive] = useState(false)
    const handleComprehensive = (event) => {
        if (comprehensive)
            setcomprehensive(false)
        else {
            setcomprehensive(true)
        }
    }
    const [Tier, setTier] = useState(false)
    const handleTier = (event) => {
        if (Tier)
            setTier(false)
        else {
            setTier(true)
        }
    }
    const [Rapid, setRapid] = useState(false)
    const handleRapid = (event) => {
        if (Rapid)
            setRapid(false)
        else {
            setRapid(true)
        }
    }
    const [Virtual, setVirtual] = useState(false)
    const handleVirtual = (event) => {
        if (Virtual)
            setVirtual(false)
        else {
            setVirtual(true)
        }
    }
    const [Extensive, setExtensive] = useState(false)
    const handleExtensive = (event) => {
        if (Extensive)
            setExtensive(false)
        else {
            setExtensive(true)
        }
    }
    const [NoCbonus, setNoCbonus] = useState(false)
    const handleNoCbonus = (event) => {
        if (NoCbonus)
            setNoCbonus(false)
        else {
            setNoCbonus(true)
        }
    }
    const [freeLife, setfreeLife] = useState(false)
    const handlefreeLife = (event) => {
        if (freeLife)
            setfreeLife(false)
        else {
            setfreeLife(true)
        }
    }
    const [OnSite, setOnSite] = useState(false)
    const handleOnSite = (event) => {
        if (OnSite)
            setOnSite(false)
        else {
            setOnSite(true)
        }
    }
    const [DirectSettle, setDirectSettle] = useState(false)
    const handleDirectSettle = (event) => {
        if (DirectSettle)
            setDirectSettle(false)
        else {
            setDirectSettle(true)
        }
    }
    const [Extentions, setExtentions] = useState(false)
    const handleExtentions = (event) => {
        if (Extentions)
            setExtentions(false)
        else {
            setExtentions(true)
        }
    }
    const [FuneralExpense, setFuneralExpense] = useState(false)
    const handleFuneralExpense = (event) => {
        if (FuneralExpense)
            setFuneralExpense(false)
        else {
            setFuneralExpense(true)
        }
    }
    const [AccInjury, setAccInjury] = useState(false)
    const handleAccInjury = (event) => {
        if (AccInjury)
            setAccInjury(false)
        else {
            setAccInjury(true)
        }
    }
    const [Air, setAir] = useState(false)
    const handleAir = (event) => {
        if (Air)
            setAir(false)
        else {
            setAir(true)
        }
    }
    const [WildScreen, setWildScreen] = useState(false)
    const handleWildScreen = (event) => {
        if (WildScreen)
            setWildScreen(false)
        else {
            setWildScreen(true)
        }
    }
    const [Call, setCall] = useState(false)
    const handleCall = (event) => {
        if (Call)
            setCall(false)
        else {
            setCall(true)
        }
    }
    const [AlterTrans, setAlterTrans] = useState(false)
    const handleAlterTrans = (event) => {
        if (AlterTrans)
            setAlterTrans(false)
        else {
            setAlterTrans(true)
        }
    }
    const [AlterVehicle, setAlterVehicle] = useState(false)
    const handleAlterVehicle = (event) => {
        if (AlterVehicle)
            setAlterVehicle(false)
        else {
            setAlterVehicle(true)
        }
    }
    const [ThirdParty, setThirdParty] = useState(false)
    const handleThirdParty = (event) => {
        if (ThirdParty)
            setThirdParty(false)
        else {
            setThirdParty(true)
        }
    }
    const [Surgery, setSurgery] = useState(false)
    const handleSurgery = (event) => {
        if (Surgery)
            setSurgery(false)
        else {
            setSurgery(true)
        }
    }
    const [DamagedKey, setDamagedKey] = useState(false)
    const handleDamagedKey = (event) => {
        if (DamagedKey)
            setDamagedKey(false)
        else {
            setDamagedKey(true)
        }
    }
    const [Freesound, setFreesound] = useState(false)
    const handleFreesound = (event) => {
        if (Freesound)
            setFreesound(false)
        else {
            setFreesound(true)
        }
    }
    const [BackTo, setBackTo] = useState(false)
    const handleBackTo = (event) => {
        if (BackTo)
            setBackTo(false)
        else {
            setBackTo(true)
        }
    }
    const [OptionsOf, setOptionsOf] = useState(false)
    const handleOptionsOf = (event) => {
        if (OptionsOf)
            setOptionsOf(false)
        else {
            setOptionsOf(true)
        }
    }
    const [Baby, setBaby] = useState(false)
    const handleBaby = (event) => {
        if (Baby)
            setBaby(false)
        else {
            setBaby(true)
        }
    }
    const [Agift, setAgift] = useState(false)
    const handleAgift = (event) => {
        if (Agift)
            setAgift(false)
        else {
            setAgift(true)
        }
    }
    const [FreePersonal, setFreePersonal] = useState(false)
    const handleFreePersonal = (event) => {
        if (FreePersonal)
            setFreePersonal(false)
        else {
            setFreePersonal(true)
        }
    }
    const [Other, setOther] = useState(false)
    const handleOther = (event) => {
        if (Other)
            setOther(false)
        else {
            setOther(true)
        }
    }
    const [Online, setOnline] = useState(false)
    const handleOnline = (event) => {
        if (Online)
            setOnline(false)
        else {
            setOnline(true)
        }
    }
    const [FreeTowing, setFreeTowing] = useState(false)
    const handleFreeTowing = (event) => {
        if (FreeTowing)
            setFreeTowing(false)
        else {
            setFreeTowing(true)
        }
    }
    const [DoorStep, setDoorStep] = useState(false)
    const handleDoorStep = (event) => {
        if (DoorStep)
            setDoorStep(false)
        else {
            setDoorStep(true)
        }
    }
    const generatePDF = () => {
        var doc = new jsPDF({
            orientation: "landscape", // set the orientation to landscape
            unit: "pt", // set the unit to points
            format: "a3", // set the page format to A4
            width: 1500 // set the width to 800 points
        });
        doc.html(document.querySelector("#pdftag"), {
            callback: function (pdf) {
              pdf.save("mypdf.pdf");
            }
          });
          
    }

    return (
        <div>
            <div id="pdftag">
                <div className="div-main-customer-find-insurance">
                    <h1 className="find-insurance-head" style={{fontFamily:"sans-serif"}}>
                        Discover the perfect insurance companies that meets all your insurance needs
                    </h1>
                    <form >
                        <label htmlFor="dropdown" className='labelHead-form-insuranceCutomer'>Vehicle Type</label>
                        <select id="dropdown-form-shop" value={selectedOption} onChange={handleDropdownChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Car">Car</option>
                            <option value="Bike">Bike</option>
                            <option value="Tuk">Tuk</option>
                            <option value="Van">Van</option>
                            <option value="Lorry">Lorry</option>
                            <option value="Truck">Truck</option>
                        </select>
                        <label htmlFor="dropdown" className='labelHead-form-insuranceCutomer'>Vehicle Brand</label>
                        <select id="dropdown-form-shop" value={brand} onChange={handleBrandChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Honda">Honda</option>
                            <option value="Suzuki">Suzuki</option>
                            <option value="BMW">BMW</option>
                            <option value="Tesla">Tesla</option>
                        </select>
                        <label htmlFor="dropdown" className='labelHead-form-insuranceCutomer'>Prefered Motor Insurance packages and features </label>
                        <div className="check-box-main">
                            <div className="left-side">
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleComprehensive} />
                                    <label className="label-check-bo">Comprehensive Cover</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleExtensive} />
                                    <label className="label-check-bo">Extensive Garage Network</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleTier} />
                                    <label className="label-check-bo">Tier-1 Industry Standard</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleRapid} />
                                    <label className="label-check-bo">Rapid Damage response</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleVirtual} />
                                    <label className="label-check-bo">Virtual Damage assements and claim settlement</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleOnSite} />
                                    <label className="label-check-bo">On-site claim assement and approval</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleDirectSettle} />
                                    <label className="label-check-bo">Direct settlement to repair upon request</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleExtentions} />
                                    <label className="label-check-bo">Ability to add special extentions to the cover</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleFuneralExpense} />
                                    <label className="label-check-bo">Cover the funeral expense</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleAccInjury} />
                                    <label className="label-check-bo">Accidental Injury Hospitalization cover</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleAir} />
                                    <label className="label-check-bo">Free air bag Cover</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleWildScreen} />
                                    <label className="label-check-bo">Free wild screen cover</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleCall} />
                                    <label className="label-check-bo">Call and Go:Enjoy an uninteruppted journey even when face an accident</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleAlterTrans} />
                                    <label className="label-check-bo">Alternative Transportation Allowance</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleAlterVehicle} />
                                    <label className="label-check-bo">Alternative Vehicle Allownce</label>
                                </div>
                            </div>
                            <div className="right-side">
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleNoCbonus} />
                                    <label className="label-check-bo">No claim bonus facility</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handlefreeLife} />
                                    <label className="label-check-bo">Free life cover for insured</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleThirdParty} />
                                    <label className="label-check-bo">Free third party property damage</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleFreeTowing} />
                                    <label className="label-check-bo">Free towing facilty</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleDoorStep} />
                                    <label className="label-check-bo">Door step service at the renewal of the insurance policy</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleOnline} />
                                    <label className="label-check-bo">Online insurance policy renewal facility</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleFreePersonal} />
                                    <label className="label-check-bo">Free personal accidental cover</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleAgift} />
                                    <label className="label-check-bo">A gift upon every 'no claim year'</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleBaby} />
                                    <label className="label-check-bo">Baby on board protection</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleOptionsOf} />
                                    <label className="label-check-bo">Options of selecting a garage of choice to carry out repairs</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleBackTo} />
                                    <label className="label-check-bo">Back to back vehicle discount</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleFreesound} />
                                    <label className="label-check-bo">Free sound system cover</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleDamagedKey} />
                                    <label className="label-check-bo">Damaged key cover</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleSurgery} />
                                    <label className="label-check-bo">Plastic surgery cover for lady drivers</label>
                                </div>
                                <div className="check-box">
                                    <input type='checkbox' className="check-box" onChange={handleOther} />
                                    <label className="label-check-bo">Other</label>
                                </div>
                            </div>
                        </div>
                        <button className='signup-form-shop' onClick={handleSubmit}>Submit</button>
                    </form>

                </div>
                {isAvailable &&
                    <div ref={fuelStationAddFormRef} className='insurance-finder'>
                        <SuitableCompanies data={Insurance} />
                    </div>
                }
            </div>
            <button className="v-button" onClick={generatePDF} >Generate Your Report</button>
        </div>
    )
}
export default CustomerFindInsurance
