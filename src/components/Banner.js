import React, { useState } from 'react';
import './Banner.css';
import bannerImage from '../images/PJM020719Q202_Luxe_WanakaNZ_LivingRoom_0264-LightOn_R1.webp';
import { Button } from '@mui/material';
import DatePickerPopup from './DatePickerPopup';

const Banner = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Anchor element for the popover
  const [selectedDates, setSelectedDates] = useState([null, null]); // Default range: [startDate, endDate]

  const toggleDatePicker = (event) => {
    if (anchorEl) {
      setAnchorEl(null); // Close the popup
    } else {
      setAnchorEl(event.currentTarget); // Open the popup
    }
  };

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          variant="contained"
          fullWidth
          className="search__button"
          onClick={toggleDatePicker}
        >
          {anchorEl ? 'Hide Dates' : 'Search Dates'}
        </Button>
      </div>

      <DatePickerPopup
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)} // Close the popover
        selectedDates={selectedDates}
        onDateChange={(newDates) => setSelectedDates(newDates)} // Update the date range
      />

      <div className="banner__content">
        <h1>Get out and stretch your imagination</h1>
        <p>Plan a different kind of getaway to uncover the hidden gems near you.</p>
        <button className="banner__button">Explore nearby</button>
      </div>
      <div className="banner__image">
        <img src={bannerImage} alt="Home banner" />
      </div>
    </div>
  );
};

export default Banner;
