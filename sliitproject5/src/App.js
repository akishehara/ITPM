import logo from './logo.svg';
import './App.css';
import Home from './Screens/HomePage';
import { Routes, Route } from 'react-router-dom'
import SignPage from './Screens/SignIn';
import AdminHomePage from './Screens/AdminHomePage';
import UpdatingFuelStationPage from './Screens/UpdatingFuelStationPage';
import OwnerHomePage from './Screens/OwnerHomePage'
import CreateShopPage from './Screens/CreateShopPage';
import ShopHomePage from './Screens/ShopHomePage'
import CustomerHomePage from './Screens/CustomerHomePage';
import CFuelStationPage from './Screens/CFuelStationPage';
import ItemAddingPage from './Screens/ItemAddingPage';
import ShopWithItemPage from './Screens/ShopWithItemPage';
import ShopHomePageCC from './Screens/ShopHomePageCC';
import ShopWithItemPageCC from './Screens/ShopWithItemPageCC';
import CurrentLocationFormPage from './Screens/CurrentLocationFormPage';
import NearMePage from './Screens/NearMePage';
import GarageHomePage from './Screens/Garage/GarageHomePage';
import CreatedServices from './Components/Garage/CreatedService';
import CreatedServicesPage from './Screens/Garage/CreatedServicesPage';
import GarageFindPageCC from './Screens/Garage/GarageFindPageCC';
import MakeAppoinmentForm from './Components/Garage/MakeAppoinmentForm';
import MakeAppoinmentPage from './Screens/Garage/MakeAppoinmentPage';
import BatteryComparisionPage from './Screens/BateryComparision/BatteryComparisionPage';
import CustomerReviewPage from './Screens/CustomerReview/CustomerReviewPage';
import InsuranceCreatePage from './Screens/Insurance/InsuranceCreatePage';
import CustomerFindInsurancePage from './Screens/Insurance/CustomerFindInsurancePage';
import SuitableCompanies from './Components/Insurance/SuitableCompanies';
import CurrentLocationShopPage from './Screens/ShopLocating/LocateShopPage';
import NearmeShop from './Components/locateShop/NearmeShop';
import TirePage from './Screens/Tire/TirePage';
import OilComparision from './Components/Oil/OilComparision';
import Buy from './Components/Buy/Buy';
import AdminHomeNew from './Components/AdminHome/AdminHome';
import ShopCount from './Components/AdminHome/ShopCount';
import ShopCC from './Components/Shop/ShopCC';
import CurrentLocationForGarage from './Components/Garage/locateGarage';
import NearmeGarage from './Components/Garage/NearMeGarage';
import WebHome from './Components/WebHome/WebHome';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/signup' element={<Home />} />
        <Route path='/' element={<WebHome />} />
        <Route path='/signin' element={<SignPage />} />
        <Route path='/adminHomeFuel' element={<AdminHomePage />} />
        <Route path='/adminHome' element={<AdminHomeNew/>} />
        <Route path='/updateFuelStation' element={<UpdatingFuelStationPage />} />
        <Route path='/ownerHome' element={<OwnerHomePage />} />
        <Route path='/createShop' element={<CreateShopPage />} />
        <Route path='/shopHome' element={<ShopHomePage />} />
        <Route path='/customerHome' element={<CustomerHomePage />} />
        <Route path='/seeFuel' element={<CFuelStationPage />} />
        <Route path='/itemAddingForm' element={<ItemAddingPage />} />
        <Route path='/shopView' element={<ShopWithItemPage />} />
        <Route path='/seeShops' element={<ShopCC />} />
        <Route path='/shopViewCC' element={<ShopWithItemPageCC />} />
        <Route path='/locateMYFuel' element={<CurrentLocationFormPage />} />
        <Route path='/nearStation' element={<NearMePage />} />
        <Route path='/garageHome' element={<GarageHomePage />} />
        <Route path='/createdServices' element={<CreatedServicesPage />} />
        <Route path='/seeServices' element={<GarageFindPageCC />} />
        <Route path='/makeAppoinment' element={<MakeAppoinmentPage />} />
        <Route path='/batteryCompare' element={<BatteryComparisionPage />} />
        <Route path='/shopReview' element={<CustomerReviewPage />} />
        <Route path='/createInsurance' element={<InsuranceCreatePage />} />
        <Route path='/findInsurance' element={<CustomerFindInsurancePage />} />
        <Route path='/insuranceFinder' element={<SuitableCompanies/>}/>
        <Route path='/locateMYShop' element={<CurrentLocationShopPage/>}/>
        <Route path='/nearShop' element={<NearmeShop/>}/>
        <Route path='/tireCompare' element={<TirePage/>}/>
        <Route path='/oilCompare' element={<OilComparision/>}/>
        <Route path='/buy' element={<Buy/>}/>
        <Route path='/shopCount' element={<ShopCount/>}/>
        <Route path='/locateGarage' element={<CurrentLocationForGarage/>}/>
        <Route path='/nearGarage' element={<NearmeGarage/>}/>
        
      </Routes>
    </div>

  );
}

export default App;
