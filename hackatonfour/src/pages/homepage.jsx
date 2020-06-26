import React, {useState, useEffect} from 'react';
import Flight from "../components/Flight"; 
import { Spinner } from 'reactstrap';

const Homepage = () => {
    const [allFlights, setAllFlights] = useState([]);
    


    useEffect(() => {
      fetchAllFlights();
    }, []);

    const fetchAllFlights = async () => {
    const resp = await fetch("https://api.skypicker.com/flights?fly_from=PRG&partner=picky&fly_to=STN&limit=5");
    const result = await resp.json();
    console.log(result.data);
    setAllFlights(result.data);
    
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
         <div>
         <h1>No Flights Available</h1>
         <Spinner type="row" color="primary"/>
         </div>
      )}
      
    </>

  );
};

  export default Homepage;