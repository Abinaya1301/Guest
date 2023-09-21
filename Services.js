import React from 'react';
import Drycleaning from './Drycleaning.jpg';
import Parking from './Parking.jpg';
import Breakfast from './Breakfast.jpg';
import Carrental from './Carrental.jpg';
import Luggage from './Luggage.jpg';
import Housekeeping from './Housekeeping.jpg';
function Services() {
    return (
      <div className="container" width="700px">
        <div classname="header"><h2>Services Of Hotel</h2></div>
        <img src={Drycleaning} alt="./Drycleaning.jpg" height="300" width="700" />
        <p>Dry Cleaning</p>
        <img src={Parking} alt="./Parking.jpg" height="300" width="700" />
        <p>Parking</p>
        <img src={Breakfast} alt="./Breakfast.jpg" height="300" width="700" />
        <p>Breakfast</p>
        <img src={Carrental} alt="./Carrental.jpg" height="300" width="700" />
        <p>Car Rental</p>
        <img src={Luggage} alt="./Luggage.jpg" height="300" width="700" />
        <p>Luggage</p>
        <img src={Housekeeping} alt="./Housekeeping.jpg" height="300" width="700" />
        <p>HouseKeeping</p>
        </div>
    )
}
export default Services;

