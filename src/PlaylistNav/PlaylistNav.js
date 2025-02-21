import React from 'react';
import styles from './PlaylistNav.module.css'


function PlaylistNav() {
    const playlists = ['tswift tuesdays', '80R08', 'golden age disney channel', 'cause of death', 'another playlist', 'tell me ur a millennial'];
    const navLinks = playlists.map(playlist => {
        return (
            <a href={'/' + playlist} className={styles.navitem}>
           &nbsp;{playlist}
        </a>
        )
    });

    return <nav>{navLinks}</nav>;
}

export default PlaylistNav;