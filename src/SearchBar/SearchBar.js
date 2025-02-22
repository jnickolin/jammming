import React from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={styles.siteSearch}>
            <label for="site-search">Search</label>
            <input type="search" id="site-search" name="q" className={styles.searchInput}/>
        </div>
    );
}

export default SearchBar;