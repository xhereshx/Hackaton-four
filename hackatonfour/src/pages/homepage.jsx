import React, {useState, useEffect} from 'react';
import Flight from "../components/Flight"; 
import { Spinner } from 'reactstrap';


const Homepage = () => {
    const [allFlights, setAllFlights] = useState([]);
    const [selectfrom, setselectfrom] = useState([]);
    const [selectto, setselectto] = useState([]);
    
   
    useEffect(() => {
      fetchAllFlights();
    }, []);

    const fetchAllFlights = async () => {
    const resp = await fetch("https://api.skypicker.com/flights?fly_from=PRG&partner=picky&fly_to=STN&limit=5");
    const result = await resp.json();
    console.log(result.data);
    setAllFlights(result.data);
   }
   
   const handleselectfrom = (e) => {
    const selectfrom = e.target.value;
    setselectfrom(e.target.value);
    
   }

   const handleselectto = (e) => {
    const selectto = e.target.value;
    setselectto(e.target.value);
    
   }

   const search = () => {
    console.log('hi search');
    const resp = await fetch("https://api.skypicker.com/flights?fly_from=${&partner=picky&fly_to=STN&limit=5");

   }
   
 return (
  <>
    <div> 
      <label for="flightfrom">select city you are flying from:</label>
      <select onChange={handleselectfrom} name="flightsfrom" id="flightsfrom">
          <option value="PRG">Prague</option>
          <option value="WMI">Warsaw</option>
      </select>

      <label for="flightto">select city you are flying to:</label>
      <select onChange={handleselectto} name="flightsto" id="flightsto">
          <option value="CDG">Paris</option>
          <option value="BCN">Barcelona</option>
      </select>

      <button onClick={search}>search</button>
    </div>

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