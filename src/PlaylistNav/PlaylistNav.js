import React from 'react';
import styles from './PlaylistNav.module.css'


function PlaylistNav() {
    const playlists = ['Tswift Tuesdays', '\'80 or \'08', 'Golden Age Disney Channel', 'Cause of Death', 'Another Playlist', 'Tell Me You\'re a Millennial'];
    const navLinks = playlists.map(playlist => {
        return (
            <div>
                <a href={'/' + playlist} className={styles.navitem}>
                &nbsp;{playlist}
                </a>
            </div>
        )
    });

    return (
        <div>
            <h1 className={styles.headline}>Playlists</h1>
            <nav>{navLinks}</nav>
        </div>
    );
}

export default PlaylistNav;