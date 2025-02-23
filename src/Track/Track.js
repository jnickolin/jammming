import React from 'react';
import styles from './Track.module.css';

function Track() {
    return (
        <div className={styles.trackContainer}>
            <img src='./album-art-temp.png' alt='album art'/>
            <h2>Bet On It</h2>
            <p>Troy</p>
        </div>
    );
}

export default Track;