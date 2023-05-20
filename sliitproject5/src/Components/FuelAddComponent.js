import React, {Component, useRef} from 'react'
import './ComponentCss/navbar.css'
import '../Components/ComponentCss/fueladdmain.css'
import imageName from '../Assests/fueladdimage.png';
import backGroundImageMain from '../Assests/fuelStationImage.jpg'
import FuelStationAddForm from './FuelStationAddingForm';

function FuelAdd() {
    const fuelStationAddFormRef = useRef(null);

    const handleImageClick = () => {
        fuelStationAddFormRef.current.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <div>
            <div
                className='mainFuel'
                style={{
                    backgroundImage: `url(${backGroundImageMain})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: `rgba(0, 0, 0, 0.5)`
                }}
            >
                <h1 className='fuelTexti' style={{
                    fontFamily: "sans-serif",
                    fontSize: "50px",
                    backgroundColor: "#1777a9",
                    color: "white",
                    padding:"1%"
                }}>Add Fuel Station</h1>
                <img
                    className='fuelImage'
                    src={imageName}
                    alt="Image Description"
                    onClick={handleImageClick}
                />
            </div>
            <div ref={fuelStationAddFormRef}>
                <FuelStationAddForm/>
            </div>
        </div>
    );
}

export default FuelAdd;