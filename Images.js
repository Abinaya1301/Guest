import React from "react";
import room2 from './room2.jpg';
import room3 from './room3.jpg';
import room4 from './room4.jpg';
function Images() { 
    return (
      <div className="container" width="900px">
        <div classname="header"><h3>Luxury Hotel Rooms Details</h3></div>
        <button onClick={()=>alert('Submit')}><h3>Book now</h3></button>
        <img src={room2} alt="./room2.jpg" height="400" width="650" />
        <p>1.room-Dimension=400-500 square.ft</p>
        <p>Three Bed Room</p>
        <p>Cost-8000</p>
        <p>AC</p>
        <button onClick={()=>alert('Submit')}><h4>Book now</h4></button>
        <img src={room3} alt="./room3.jpg" height="400" width="650" />
        <p>2.Room Dimension=300-400 Square.ft</p>
        <p>Two bed Rooms</p>
        <p> Cost-5000 </p>
        <button onClick={()=>alert('Submit')}><h4>Book now</h4></button>
        <img src={room4} alt="./room4.jpg" height="400" width="650" />
        <p>3.Room Dimension=200-300 Square.ft</p>
        <p>Single Bed Room</p>
        <p>Non-AC</p>
      </div>
    );
  }
export default Images;
