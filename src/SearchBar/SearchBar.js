import React from 'react';

function SearchBar() {
    return (
        <div>
            <label for="site-search">Search</label>
            <input type="search" id="site-search" name="q"/>
        </div>
    );
}

export default SearchBar;