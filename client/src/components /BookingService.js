const baseURl = "http://localhost:9000/api/hotel"

export const getBookings = () => {
    return fetch(baseURl)
    .then (res => res.json())
};

export const postBooking = (booking) => {
    return fetch(baseURl , {
        method: 'POST',
        body.JSON.stringify(booking),
        headers: { 'Content-Type' : 'application/json'}
    })
    .then(res => res.json())
  
};

export const deleteBooking = (id) => {
    return fetch(baseURl + id, {
        method: 'DELETE'
    })
};