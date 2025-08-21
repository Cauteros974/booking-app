import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import './ListingDetails.css';

function ListingDetails({ listings }) {
    const { id } = useParams();
    const navigate = useNavigate;

    const listing = listings.fing(item => item.id === parseInt(id));

    if (!listing) {
        return <h2>Object not found!</h2>
    }

    const handleBooking = (formData) => {
        alert(`Booking successful! Details: ${JSON.stringify(formData)}`);
        navigate('/');
    };

    return (
        <div className="listing-details">
          <div className="details-header">
            <img src={listing.image} alt={listing.title} />
            <div className="details-info">
              <h1>{listing.title}</h1>
              <p className="details-city">{listing.city}</p>
              <div className="details-rating">★ {listing.rating}</div>
              <p className="details-price">{listing.price} ₴ / night</p>
            </div>
          </div>
          <div className="details-content">
            <div className="details-description">
              <h2>Description</h2>
              <p>{listing.description}</p>
            </div>
            <div className="booking-section">
              <h2>Make a reservation</h2>
              <BookingForm onBookingSubmit={handleBooking} />
            </div>
          </div>
        </div>
      );
}

export default ListingDetails;