import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        const { searchValue, handleInputChange, handleSearchClick, handleKeyPress } = this.props
        return (
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
      
            <button onClick={handleSearchClick}>Search</button>
          </div>



            <div className='searchBar-container' onKeyUp={handleKeyPress}>
                <input className='searchBar-input' value={searchValue} onChange={handleInputChange} />
                <button className='searchBar-button' onClick={handleSearchClick}>Search</button>
            </div>
        )
    }
}

export default SearchBar