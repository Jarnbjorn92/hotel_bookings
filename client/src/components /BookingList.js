import React from 'react'
import BookingItem from './BookingItem'

const BookingList = ({bookings}) => {

  const bookingNodes = bookings.map(booking => {
    return <BookingItem  key={booking._id} booking={booking}/>
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