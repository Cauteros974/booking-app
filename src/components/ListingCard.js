import React from 'react';
import { Link } from 'react-router-dom';
import './ListingCard.css';

function ListingCard({ listing }) {
    return (
        <Link to={`/listing/${listing.id}`} className="listing-card">
        <img src={listing.image} alt={listing.title} />
        <div className="card-content">
          <h3>{listing.title}</h3>
          <p className="city">{listing.city}</p>
          <p className="price">{listing.price} ₴ / night</p>
          <div className="rating">
            ★ {listing.rating}
          </div>
        </div>
      </Link>
    );
}

export default ListingCard;