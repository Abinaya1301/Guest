import Navibar from "./component/login/Navibar";
import Home from "./component/Home";
import Login from "./component/login/Logform";
import Services from "./component/login/Services";
import room1 from "./component/login/room1.jpg";
import room2 from "./component/login/room2.jpg";
import room3 from "./component/login/room3.jpg";
import room4 from "./component/login/room4.jpg";
import Drycleaning from "./component/login/Drycleaning.jpg";
import Parking from "./component/login/Parking.jpg";
import Luggage from "./component/login/Luggage.jpg";
import Housekeeping from "./component/login/Housekeeping.jpg";
import Wifi from "./component/login/Wifi.jpg";
import Carrental from "./component/login/Carrental.jpg";
import Images from "./component/login/Images";
import  Hotel from "./component/login/Hotel.jpeg";
import Validation from "./component/login/Validation";
//import './App.css';
import HotalBook from './component/login/HotelRoomBooking';
import AvailableDates from "./component/login/ReactDatePicker";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
   
     <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navibar/>}>
          <Route index element={<Home/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/AvailableDates' element={<AvailableDates/> }/>
          <Route path='/Images' element={<Images/> }/>
        </Route>
      </Routes>
      <imageComponent />
    </BrowserRouter>
   
    
  );
}
export default App;





