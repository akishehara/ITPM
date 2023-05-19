import axios from "axios";
import { AcroFormField } from "jspdf";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Insurance/owner.css'

function OwnerCompanyCreate() {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState(null)
    const [owner, setOwner] = useState(null)
    const [url, setUrl] = useState(null)
    const [address, setAddress] = useState(null)
    const [email, setEmail] = useState(null)
    const [number, setNumber] = useState(null)
    const [comRegNumber, setComRegNumber] = useState(null)


    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('owner', owner);
            formData.append('url', url)
            formData.append('address', address)
            formData.append('email', email)
            formData.append('number', number)
            formData.append('companyRegNumber', comRegNumber)
            formData.append('image', image);
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
            if (image)
                await axios.post('http://localhost:4000/insurance/create', formData);
                navigate('/ownerHome')

        } catch (error) {

        }

    };
    const handleTitleChange = (event) => {
        console.log(event.target.value)
        setOwner(event.target.value)
    }
    const handleOwnerChange = (event) => {
        console.log(event.target.value)
        setTitle(event.target.value)
    }
    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };
    const handleURLChange = (event) => {
        setUrl(event.target.value)
    }
    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleContactChange = (event) => {
        setNumber(event.target.value)
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




    return (
        <div className="main-div-insurance">
            <form className="insurance-create-form">
                <div className='topic-form-insurance'>
                    <h3 className='create-shop-title-form-insurance'>Create Your Insurance Company</h3>
                </div>
                <div className='form-form-insurance'>
                    <div className='Email-form-insurance'>
                        <label className='labelHead-form-insurance'>Company Name</label>
                        <input type="text" name="Email" className="FormControl-form-shop" placeholder="Enter Company Name" onChange={handleTitleChange} />
                    </div>
                    <div className='Email-form-insurance'>
                        <label className='labelHead-form-insurance'>Owner Name</label>
                        <input type="text" name="Email" className="FormControl-form-shop" placeholder="Enter Owner Name" onChange={handleOwnerChange} />
                    </div>
                    <div className='Email-form-insurance'>
                        <label className='labelHead-form-insurance'>Company URL</label>
                        <input type="text" name="Email" className="FormControl-form-shop" placeholder="Enter Company URL" onChange={handleURLChange} />
                    </div>
                    <div className='Email-form-insurance'>
                        <label className='labelHead-form-insurance'>Company Address</label>
                        <input type="text" name="Email" className="FormControl-form-shop" placeholder="Enter Company Address" onChange={handleAddressChange} />
                    </div>
                    <div className='Email-form-insurance'>
                        <label className='labelHead-form-insurance'>Email</label>
                        <input type="text" name="Email" className="FormControl-form-shop" placeholder="Enter Email" onChange={handleEmailChange} />
                    </div>
                    <div className='Email-form-insurance'>
                        <label className='labelHead-form-insurance'>Contact Number</label>
                        <input type="text" name="Email" className="FormControl-form-shop" placeholder="Enter Contact Number" onChange={handleContactChange} />
                    </div>
                    <div className='Email-form-insurance'>
                        <label className='labelHead-form-insurance'>Company Registration Number</label>
                        <input type="text" name="Email" className="FormControl-form-shop" placeholder="Enter Company Registration Number" onChange={handleEmailChange} />
                    </div>
                    <label htmlFor="image" className='labelHead-form-insurance' >Select an image:</label>
                    <input type="file" className='FormControl-form-shop' onChange={handleImageChange} />
                    <div className="check-box-main">
                        <div className="left-side">
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleComprehensive} />
                                <label className="label-check-box">Comprehensive Cover</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleExtensive} />
                                <label className="label-check-box">Extensive Garage Network</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleTier} />
                                <label className="label-check-box">Tier-1 Industry Standard</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleRapid} />
                                <label className="label-check-box">Rapid Damage response</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleVirtual} />
                                <label className="label-check-box">Virtual Damage assements and claim settlement</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleOnSite} />
                                <label className="label-check-box">On-site claim assement and approval</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleDirectSettle} />
                                <label className="label-check-box">Direct settlement to repair upon request</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleExtentions} />
                                <label className="label-check-box">Ability to add special extentions to the cover</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleFuneralExpense} />
                                <label className="label-check-box">Cover the funeral expense</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleAccInjury} />
                                <label className="label-check-box">Accidental Injury Hospitalization cover</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleAir} />
                                <label className="label-check-box">Free air bag Cover</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleWildScreen} />
                                <label className="label-check-box">Free wild screen cover</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleCall} />
                                <label className="label-check-box">Call and Go:Enjoy an uninteruppted journey even when face an accident</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleAlterTrans} />
                                <label className="label-check-box">Alternative Transportation Allowance</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleAlterVehicle} />
                                <label className="label-check-box">Alternative Vehicle Allownce</label>
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleNoCbonus} />
                                <label className="label-check-box">No claim bonus facility</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handlefreeLife} />
                                <label className="label-check-box">Free life cover for insured</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleThirdParty} />
                                <label className="label-check-box">Free third party property damage</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleFreeTowing} />
                                <label className="label-check-box">Free towing facilty</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleDoorStep} />
                                <label className="label-check-box">Door step service at the renewal of the insurance policy</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleOnline} />
                                <label className="label-check-box">Online insurance policy renewal facility</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleFreePersonal} />
                                <label className="label-check-box">Free personal accidental cover</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleAgift} />
                                <label className="label-check-box">A gift upon every 'no claim year'</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleBaby} />
                                <label className="label-check-box">Baby on board protection</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleOptionsOf} />
                                <label className="label-check-box">Options of selecting a garage of choice to carry out repairs</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleBackTo} />
                                <label className="label-check-box">Back to back vehicle discount</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleFreesound} />
                                <label className="label-check-box">Free sound system cover</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleDamagedKey} />
                                <label className="label-check-box">Damaged key cover</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleSurgery} />
                                <label className="label-check-box">Plastic surgery cover for lady drivers</label>
                            </div>
                            <div className="check-box">
                                <input type='checkbox' className="check-box" onChange={handleOther} />
                                <label className="label-check-box">Other</label>
                            </div>
                        </div>
                    </div>

                    <button className='signup-form-shop' onClick={handleSubmit}>Create Insurance Company</button>
                </div>
            </form>
        </div>
    )

}
export default OwnerCompanyCreate