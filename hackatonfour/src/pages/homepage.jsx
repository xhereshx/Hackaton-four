import React, {useState, useEffect} from 'react';
import Flight from "../components/Flight"; 

const Homepage = () => {
    const [allFlights, setAllFlights] = useState([]);
    
    useEffect(() => {
      fetchAllFlights();
    }, []);

    const fetchAllFlights = async () => {
    const resp = await fetch("https://api.skypicker.com/flights?&limit=10");
    const data = await resp.json();
    // console.log(data);
    setAllFlights(data);
    
  };
 return (
    <>
       {allFlights.length ? (
         <>
          <h1>All flights: </h1>
          <div style={{  display: "flex", flexWrap: "wrap" }}>
            {allFlights.map((f, i) => (
              <Flight flight={f} key={i} />
            ))}
          </div>
         </>
       ) : (
         <h1>No Flights Available</h1>
       )}
    </>
  );
};

  export default Homepage;