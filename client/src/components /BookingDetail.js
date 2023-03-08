import React from 'react'

const BookingDetail = () => {


  return (
    <>
       <form>
            <h2>Add New Booking</h2>
            <div>
                <label htmlFor="Guest Name">Guest Name:</label>
                <input type="text"/>
            </div>
            <div>
                <label htmlFor="Guest Email Address">Guest Email Address:</label>
                <input 
                    type="text"/>
            </div> 
             <div>
                <label htmlFor="Checked in Status">Checked in Status</label>
                <input 
                    type="check-box"/>
            </div>
            <input type="submit" value="Save" id="save"/>
	    </form>
    </>
  )
}
export default BookingDetail


