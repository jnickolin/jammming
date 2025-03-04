import React from 'react';
import styles from './Track.module.css';
import trackData from './TrackData.js';

function Track() {
    return (
        <div className={styles.trackContainer}>
            <img src={trackData.src} alt='album art'/>
            <h2>{trackData.title}</h2>
            <p>{trackData.artist}</p>
        </div>
    );
}

export default Track;