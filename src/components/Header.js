import React from 'react';
import './Header.css'; // Add styles for the header

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header__logo">
        <img
          src="https://links.papareact.com/qd3" // Replace with Airbnb logo link or your logo
          alt="Airbnb Logo"
        />
      </div>

      {/* Search Bar */}
      <div className="header__search">
        <input type="text" placeholder="Start your search" />
        <button className="search__icon">
          <i className="fa fa-search"></i> {/* FontAwesome icon */}
        </button>
      </div>

      {/* Navigation */}
      <div className="header__nav">
        <p>Become a host</p>
        <i className="fa fa-globe"></i> {/* Globe icon */}
        <i className="fa fa-user-circle"></i> {/* User icon */}
      </div>
    </header>
  );
};

export default Header;
