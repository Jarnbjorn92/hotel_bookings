import React, {useState} from 'react'

const BookingDetail = ({createBooking}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')

  const handleNameChange = (event) => setName(event.target.value)
  const handleEmailChange = (event) => setEmail(event.target.value)
  const handleDateChange = (event) => setDate(event.target.value)

  const handleSubmit = event => {
    event.preventDefault();
    createBooking({
      name: name,
      email: email,
      date: date
    });
    setName('')
    setEmail('')
    setDate('') 
  }




  return (
    <>
       <form onSubmit={handleSubmit}>
            <h2>Add New Booking</h2>
            <div>
                <label htmlFor="Guest Name">Guest Name:</label>
                <input required type="text" id="name" name="name" value={name} onChange={handleNameChange}/>
            </div>
            <div>
                <label htmlFor="Guest Email Address">Guest Email Address:</label>
                <input 
                   required type="email" id="email" name="email" value={email} onChange={handleEmailChange}/>
            </div> 
             <div>
                <label htmlFor="Checked in Status">Date</label>
                <input 
                    required type="date" id="date" name="date" value={date} onChange={handleDateChange} />
            </div>
            <button type="submit">Add Booking</button>
	    </form>
    </>
  )
}
export default BookingDetail


