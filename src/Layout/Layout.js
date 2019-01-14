import React from 'react';
import styles from './Layout.module.css';
import LinkDisplay from '../Components/Navigation/LinkDisplay/LinkDisplay';

const layout = () => (

 <div>
     {/* Background image properties*/}
    <div className={styles.background}></div>

     {/* Grid Navigation Container Start*/}
    <div className={styles.gridContainer}>

        {/* Display small logo */}
        <div className={styles.logoSmallContainer}>
            <div className={styles.logoSmall}></div>
        </div>

        {/* Display large logo */}
        <div className={styles.largeLogoContainer}>
        <div className={styles.logoLarge}></div>
        </div>

        {/* Display Links */}
     <div className={styles.linkContainer}>
      <LinkDisplay/>
    </div>

        {/*End grid container*/}
    </div>
 </div>
);

export default layout;