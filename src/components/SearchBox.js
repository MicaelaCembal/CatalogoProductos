import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

function SearchBox({ onSearch, searchText }) {
  const [inputText, setInputText] = useState(searchText);

  useEffect(() => {
    setInputText(searchText); 
  }, [searchText]);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputText);
  };

  return (
    <div className="search-box position-relative overflow-hidden w-100">
      <div className="search-wrap">
        <div className="close-button position-absolute">
          <svg className="close" width="22" height="22">
            <use xlinkHref="#close"></use>
          </svg>
        </div>
        <form id="search-form" className="text-center pt-3 " onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input fs-5 p-4 bg-transparent searchBarEstilos"
            placeholder="Search..."
            value={inputText}
            onChange={handleChange}
          />
          <button type="submit" className="search-button lupita">
            <FaSearch className= "lupita1"/>
          </button>
        </form>
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};

export default SearchBox;
