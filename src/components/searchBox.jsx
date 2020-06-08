import React from 'react';

const SearchBox = ({value, onChange}) => {
    return ( 
        <input 
        className="form-control mr-sm-2" 
        type="search"
        placeholder="Search" 
        aria-label="Search"
        value={value}
        name = "query"
        onChange = {onChange}
        ></input>
     );
}
 
export default SearchBox;