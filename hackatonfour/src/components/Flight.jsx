import React from "react";


const Flight = ({ flight }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "wrap",
        flex: "1 0 30%",
      }}
    >
      <h2>From: {flight.cityFrom}</h2>
      <h2>To: {flight.cityTo}</h2>
      <h2>Departure Time: {flight.dTime}</h2>
      <h2>Arrival Time: {flight.aTime}</h2>
      <h2>Price:{flight.price}</h2>
    </div>

    
  );
};

export default Flight;
