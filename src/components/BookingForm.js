import React, { useState} from "react";
import './BookingForm.css';

function BookingForm({ onBookingSubmit }) {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();
        onBookingSubmit({ checkIn, checkOut, guests});
    };

    return( 
        
    );
}

export default BookingForm;