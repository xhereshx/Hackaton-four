import React, {useState, useEffect} from 'react';



const Homepage = () => {
    const [allFlights, setAllFlights] = useState([]);
    
    

    const fetchAllFlights = async () => {
    const resp = await fetch("https://api.skypicker.com/flights?fly_from=PRG&partner=picky&fly_to=STN&limit=10");
    const data = await resp.json();
    console.log(data);
    setAllFlights(data);
    
  };

  useEffect(() => {
    fetchAllFlights();
  }, []);

 return (
     <div></div>
 )
};

  export default Homepage;