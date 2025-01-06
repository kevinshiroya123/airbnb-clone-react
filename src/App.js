import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Home from './components/Home';
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Home />
      <Footer /> {/* Add Footer Component */}
    </div>
  );
}

export default App;
