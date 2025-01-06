import React, { useState } from 'react';
import { Popover, TextField, Stack, Button, InputAdornment } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PersonIcon from '@mui/icons-material/Person';

const DatePickerPopup = ({ anchorEl, onClose, selectedDates = [null, null], onDateChange }) => {
  const open = Boolean(anchorEl);
  const [guests, setGuests] = useState(1); // State to store number of guests

  const handleStartDateChange = (newDate) => {
    onDateChange([newDate, selectedDates[1]]); // Update start date
  };

  const handleEndDateChange = (newDate) => {
    onDateChange([selectedDates[0], newDate]); // Update end date
  };

  const handleSearch = () => {
    // Handle search functionality
    console.log('Start Date:', selectedDates[0]);
    console.log('End Date:', selectedDates[1]);
    console.log('Guests:', guests);
    onClose(); // Close the popup after searching
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={2} style={{ padding: '16px', width: '300px' }}>
          {/* Date Pickers */}
          <DatePicker
            label="Start Date"
            value={selectedDates[0]} // Access start date
            onChange={handleStartDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="End Date"
            value={selectedDates[1]} // Access end date
            onChange={handleEndDateChange}
            renderInput={(params) => <TextField {...params} />}
          />

          {/* Number of Guests */}
          <TextField
            label="Number of Guests"
            type="number"
            value={guests}
            onChange={(e) => setGuests(Math.max(1, Number(e.target.value)))} // Ensure guests >= 1
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Search Button */}
          <Button
            variant="contained"
            onClick={handleSearch}
            style={{
              backgroundColor: '#ff385c',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '5px',
              marginTop: '16px',
            }}
          >
            Search
          </Button>
        </Stack>
      </LocalizationProvider>
    </Popover>
  );
};

export default DatePickerPopup;
