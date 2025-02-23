import React from 'react';
import styles from './SearchResults.module.css';

function SearchResults() {
    const resultTracks = ['This is Me', 'Push It to the Limit', 'Breaking Free', 'What Dreams Are Made Of', 'Bet on It', 'Best of Both Worlds', 'Cory in the House'];
    const resultsList = resultTracks.map(track => {
        return (
            <div>
                <h2>Track Name</h2>
            </div>
        )
    });

    return (
        <div>
            <h1 className={styles.headline}>Search Results</h1>
            {resultsList}
        </div>
    );
}

export default SearchResults;