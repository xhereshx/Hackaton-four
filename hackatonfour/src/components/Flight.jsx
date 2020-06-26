import React from "react";
import { DateTime } from 'luxon';

const Flight = ({ flight }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "wrap",
        flex: "1 0 40%",
      }}
    >
      <h2>From: {flight.cityFrom}</h2>
      <h2>To: {flight.cityTo}</h2>
      <h2>Departure Time: {DateTime.fromMillis(flight.dTime * 1000).toFormat('hh:mm')}</h2>
      <h2>Arrival Time: {DateTime.fromMillis(flight.aTime * 1000).toFormat('hh:mm')}</h2>
      <h2>Price:{flight.price}</h2>
    </div>    
  );
};

export default Flight;
