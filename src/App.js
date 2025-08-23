import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ListingList from './components/ListingList';
import ListingDetails from './components/ListingDetails';
import Signup from './components/SignUp';
import Login from './components/Login';
import { listings } from './data/listings';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { currentUser, logout } = useAuth();

  return (
    <Router>
      <div className="app">
        <header>
          <Link to="/" className="logo">Booking App</Link>
          <nav>
            {currentUser ? (
              <>
                <span>Привет, {currentUser.email}</span>
                <button onClick={logout}>LogOut</button>
              </>
            ) : (
              <>
                <Link to="/signup">Registratiob</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ListingList listings={listings} />} />
            <Route path="/listing/:id" element={<ListingDetails listings={listings} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;