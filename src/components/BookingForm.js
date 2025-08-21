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
        <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
                <label htmlFor="check-in">Arrival date: </label>
                <input 
                    type="date"
                    id="check-in"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
            <label htmlFor="check-out">Дата выезда:</label>
            <input
                type="date"
                id="check-out"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
            />
            </div>

            <div className="form-group">
                <label htmlFor="guests">Количество гостей:</label>
                <input
                    type="number"
                    id="guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="1"
                    required
                />
            </div>
            <butto type="submit" className="book-button">Make a reservation</butto>
        </form>
    );
}

export default BookingForm;