import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ListingList from './components/ListingList';
import ListingDetails from './components/ListingDetails';
import { listings } from './data/listings';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<ListingList listings={listings} />} />
            <Route path="/listing/:id" element={<ListingDetails listings={listings} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;