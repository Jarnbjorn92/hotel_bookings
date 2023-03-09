const baseURl = "http://localhost:9000/api/hotel"

const BookingService = {

getBookings() {
    return fetch(baseURl)
    .then (res => res.json())
}, 

addBooking(booking){
    return fetch(baseURl , {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: { 'Content-Type' : 'application/json'}
    })
    .then(res => res.json())
  
}, 

deleteBooking(id) {
    return fetch(baseURl + id, {
        method: 'DELETE'
    })
}
};

export default BookingService;
