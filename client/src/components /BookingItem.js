import React from 'react'

const BookingItem = ({booking}) => {
  return (
    <div>
        
        <h2>Booking:</h2>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        <p>{booking.date}</p>
        <button type="submit">Remove Booking</button>
        



    </div>
  )
}

export default BookingItem