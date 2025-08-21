import React, {useState} from "react";
import ListingCard from './ListingCard';
import './ListingList.css';

function ListingList({ listings }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredListings = listings.filter(listings => 
        listings.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        listing.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="listing-list-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by city or name..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="listing-grid">
        {filteredListings.length > 0 ? (
          filteredListings.map(listing => (
            <ListingCard key={listing.id} listing={listing} />
          ))
        ) : (
          <p>Nothing found.</p>
        )}
      </div>
    </div>
    );
}

export default ListingList;