import React from 'react';
import style from './Layout.module.css';
import LinkDisplay from '../Components/Navigation/LinkDisplay/LinkDisplay';

const layout = () => (
 <div>
    <div className={style.background}></div>
    <div className={style.gridContainer}>
            <div className={style.logoLarge}></div>
  <div className={style.linkContainer}>
      <LinkDisplay/>
  </div>

    </div>
 </div>
);

export default layout;