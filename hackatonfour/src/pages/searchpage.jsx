import React, {useState, useEffect} from 'react';
import Flight from "../components/Flight"; 
import SearchBar from "../components/SearchBar"; 

const Homepage = () => {
    const [allFlights, setAllFlights] = useState([]);
    


    
    handleSearchClick = () => {
      this.getSearchResults()
    }

    getSearchResults = async () => {
      const response = fetch(`${url}${this.state.searchValue}`);
      const data = await (await response).json();
      console.log(data.query.search);
      this.setState({searchResults:data.query.search})
      }




  };
 return (
    <>
    <div> 
      <label for="flightfrom">select city you are flying from:</label>
      <select name="flightsfrom" id="flightsfrom">
          <option value="PRG">Prague</option>
          <option value="WMI">Warsaw</option>
      </select>

      <label for="flightto">select city you are flying to:</label>
      <select name="flightsto" id="flightsto">
          <option value="CDG">Paris</option>
          <option value="BCN">Barcelona</option>
      </select>

      <button>search</button>
    </div>

       )}
   


    
 </>

  );
};

  export default Homepage;