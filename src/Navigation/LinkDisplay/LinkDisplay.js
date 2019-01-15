import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import style from './LinkDisplay.module.css';

import Audio from '../HeaderLink_Audio/HeaderLink_Audio';
import AudioContent from '../../PageContent/AudioContent/AudioContent';

import Visual from '../HeaderLink_Visual/HeaderLink_Visual';
import VisualContent from '../../PageContent/VisualContent/VisualContent';

import Words from '../HeaderLink_Words/HeaderLink_Words';
import WordsContent from '../../PageContent/WordsContent/WordsContent';

import Info from '../HeaderLink_Info/HeaderLink_Info';
import InfoContent from '../../PageContent/InfoContent/InfoContent';


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