import React from 'react';
import style from './Layout.module.css';
import LinkDisplay from '../Components/Navigation/LinkDisplay/LinkDisplay';

const layout = () => (
 <div>
     {/* Background image properties*/}
    <div className={style.background}></div>

     {/* Grid Navigation Container Start*/}
    <div className={style.gridContainer}>

        {/* Display small logo */}
        <div className={style.logoSmallContainer}>
            <div className={style.logoSmall}></div>
        </div>

        {/* Display large logo */}
        <div className={style.largeLogoContainer}>
        <div className={style.logoLarge}></div>
        </div>

        {/* Display Links */}
  <div className={style.linkContainer}>
      <LinkDisplay/>
  </div>

    </div>
 </div>
);

export default layout;