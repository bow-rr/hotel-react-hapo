import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
// import data from "./data/fakeBookings.json";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />

      {/*------- Footer -------*/}

      <Footer
        address={[
          "Address: 15 Upper Street, London, EC1 2HB",
          "E-mail: info@Thameshotel.com",
          "Telephone: 010 23456789",
        ]}
      />
    </div>
  );
};

export default App;
