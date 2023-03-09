import React from 'react'
import BookingItem from './BookingItem'

const BookingList = ({bookings, handleDeleteBooking}) => {

  const bookingNodes = bookings.map(booking => {
    return <BookingItem  key={booking._id} booking={booking} handleDeleteBooking={handleDeleteBooking}/>
  })





  return (
    <>
    <ul>
        {bookingNodes}
        
    </ul>
    </>
  )

}

export default BookingList