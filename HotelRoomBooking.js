import React, { useState, useEffect } from 'react';

const HotelRoomBooking = () => {
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    // Get the list of hotels from the database.
    fetch('/api/hotels')
      .then(response => response.json())
      .then(data => setHotels(data));
  }, []);

  const handleHotelSelect = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  const handleBookRoom = () => {
    // Book the selected room.
    fetch('/api/bookings', {
      method: 'POST',
      body: JSON.stringify({
        hotelId: selectedHotel.id,
        roomId: selectedRoom.id
      })
    })
      .then(response => response.json())
      .then(data => {
        // Show a confirmation message.
        alert('Your room has been booked!');
      });
  };

  return (
    <div>
      <h2>Hotel Room Booking</h2>
      <select onChange={handleHotelSelect}>
        <option>Select a hotel</option>
        {hotels.map(hotel => (
          <option key={hotel.id}>{hotel.name}</option>
        ))}
      </select>

      {selectedHotel && (
        <div>
          <h2>Rooms</h2>
          <select onChange={handleRoomSelect}>
            <option>Select a room</option>
            {selectedHotel.rooms.map(room => (
              <option key={room.id}>{room.name}</option>
            ))}
          </select>
        </div>
      )}

      <button onClick={handleBookRoom}>Book Room</button>
    </div>
  );
};

export default HotelRoomBooking;