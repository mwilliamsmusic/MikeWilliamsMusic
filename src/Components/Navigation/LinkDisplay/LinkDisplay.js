import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import style from './LinkDisplay.module.css';

import Audio from '../AudioHeaderLink/AudioHeaderLink';
import AudioContent from '../../../AudioContent/AudioContent';

import Visual from '../Visual/Visual';
import VisualContent from '../Visual/VisualContent/VisualContent';

import Words from '../Words/Words';
import WordsContent from '../Words/WordsContent/WordsContent';

import Info from '../Info/Info';
import InfoContent from '../../../InfoContent/InfoContent';


const linkDisplay = () => (

    <Router>
    <div>
    <div className={style.links} >
        <li>
            <Link to= "/audio"> <Audio/> </Link>
        </li>
        <li>
            <Link to= "/visual"> <Visual/> </Link>
        </li>

        {/*  <li>
            <Link to= "/words"> <Words/> </Link>
        </li>
        */}
        <li>
            <Link to= "/info"> <Info/> </Link>
        </li>

    </div>
        <Route path="/audio" component={AudioContent} />
        <Route path="/visual" component={VisualContent} />
        {/*<Route path="/words" component={WordsContent} />*/}
        <Route path="/info" component={InfoContent} />
    </div>
    </Router>
);
export default linkDisplay;