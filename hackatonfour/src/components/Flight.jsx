import React from "react";

const Flight = ({ flight }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1 0 30%",
      }}
    >
      <h2>{flight.search_id}</h2>
    </div>
  );
};

export default Flight;
