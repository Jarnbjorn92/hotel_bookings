import React from 'react'

const BookingItem = ({booking, handleDeleteBooking}) => {

    const deleteBookings = () => {
        handleDeleteBooking(booking._id)

    }
  return (
    <div>
        
        <h2>Booking:</h2>
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        <p>{booking.date}</p>
        <button onClick={deleteBookings} type="submit">Remove Booking</button>
    </div>
  )
}

export default BookingItem