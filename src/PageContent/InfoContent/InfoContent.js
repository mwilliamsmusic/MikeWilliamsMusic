import React from 'react';

import styles from './InfoContent.module.css'

const infoContent =() => (

    <div className = {styles.infoGrid} >

    <div className = {styles.infoText}>

        < p ></p>

        Contact:<div className={styles.emailLinks}><a href="mailto:info@mikewilliamsmusic.com">info@mikewilliamsmusic.com</a></div>
        < p > </p>
        Freelance Audio / Web: <div className= {styles.emailLinks}>
        <a href="mailto:freelance@mikewilliamsmusic.com">freelance@mikewilliamsmusic.com</a>
    </div>
        < p ></p>
        {/* Twitter: <div className="visualLinks"><a href="https://twitter.com/m_williamsmusic"> @M_WilliamsMusic</a></div>*/}
        < div className = {styles.visualLinks} >
            <p> <a href = "https://soundcloud.com/m_williamsmusic" target = "_blank" > Soundcloud </a></p>
            </div>
        <div className={styles.visualLinks}><p><a href="http://www.wimbusstudios.com" target="_blank">Wimbus Studios</a></p>
        </div>
< p ></p>
        <div className={styles.copyright}><p>All works are under copyright by Mike Williams.
    The Island of Eternal Struggle album artwork and logo belong to Rebecca Mount. </p>
        </div>

    </div>
</div>
);


export default infoContent;