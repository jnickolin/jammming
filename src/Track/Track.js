import React from 'react';
import styles from './Track.module.css';

function Track() {
    return (
        <div className={styles.trackContainer}>
            <img src='./album-art-temp.png' alt='album art'/>
        </div>
    );
}

export default Track;