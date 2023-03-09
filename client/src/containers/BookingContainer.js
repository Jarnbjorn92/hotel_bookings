import React, {useEffect, useState} from 'react'
import BookingList from '../components /BookingList'
import BookingService from '../components /BookingService'
import BookingDetail from '../components /BookingDetail'

const BookingContainer = () => {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    BookingService.getBookings()
    .then(bookings => setBookings(bookings))
    
  }, [])

  const createBooking = newBooking => {
    BookingService.addBooking(newBooking)
    .then(savedBooking => setBookings([...bookings, savedBooking]))
  };

  const handleDeleteBooking = bookingID => {
    BookingService.deleteBooking(bookingID);

    setBookings(bookings.filter(booking => booking._id !== bookingID))
  };




  return (
    <>
    <BookingDetail createBooking={createBooking}/>
    <BookingList bookings={bookings} handleDeleteBooking={handleDeleteBooking}/>
    </>
  )
}

export default BookingContainer