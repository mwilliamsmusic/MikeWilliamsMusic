import React from 'react';

import styles from './VisualContent.module.css';

const  visualContent = () => (

        <div>
            {/* Video Section*/}
            <div className={styles.video}><p>Video</p>
            </div>

            <div className={styles.spacer}>
            </div>

            {/* Reviews Trailer */}
            <div className={styles.videoSize}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Wr59M17RxNE" frameborder="0"
                        allow="autoplay; encrypted-media" allowfullscreen align="middle"></iframe>
            </div>

            {/* Rave Trailer */}
            <div className={styles.videoSize}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3du-8ceRKfY" frameborder="0"
                        allow="autoplay; encrypted-media" align="middle" allowfullscreen></iframe>
            </div>



    {/* Video Game Section */}
    <div className={styles.video}><p>Video Games</p>
    </div>
    <div className={styles.spacer}>
    </div>

            {/* Star Visual Grid for Games */}
    <div className={styles.visualGrid}>

        <div className={styles.iesLogo}>
        </div>

        <div className={styles.videoGame}>
            <div className={styles.videoGameTitle}><p>The Island of Eternal Struggle</p>
            </div>

            <p> A soldier flees an island ravished by war between deities. Instead of leaving it all behind for
                a peaceful life, the war follows him to an innocent land. </p>

            <p> The Island of Eternal Struggle is a turn-based RPG with job classes. Each class is unique to each character along
                with it's own button mechanic that allows for a more in-depth player experience.</p>

            <div className={styles.visualLinks}>
            <p> <a href="https://store.steampowered.com/app/534240/The_Island_of_Eternal_Struggle/"> Available now for PC
                on Steam</a> and a future console release.</p>
            </div>

        <div className={styles.visualLinks}>
            <a href="http://www.wimbusstudios.com">Wimbus Studios</a>
        </div>
            {/*End Video Game Grid Content*/}
        </div>
        {/*End Visual Grid Container*/}
    </div>

        </div>
);


export default visualContent;