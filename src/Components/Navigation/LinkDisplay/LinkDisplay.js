import React from 'react';
import style from './LinkDisplay.module.css';

import Audio from '../Audio/Audio';
import Visual from '../Visual/Visual';
import Words from '../Words/Words'
import Info from '../Info/Info';

const linkDisplay = () => (
    <div className={style.linkContain}>
    <div className={style.links} >
        <li> <Audio/> </li>
        <li> <Visual/> </li>
            <li><Words/></li>
        <li> <Info/></li>
        </div>
    </div>
);

export default linkDisplay;