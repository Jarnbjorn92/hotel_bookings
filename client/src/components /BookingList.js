import React from 'react'
import BookingDetail from './BookingDetail'

const BookingList = () => {

  return (
    <>
    <ol>
        <BookingDetail/>
        <button>Remove</button>
    </ol>
    </>
  )

}

export default BookingList