import React, {Fragment} from 'react';
const albumListing = (props) => {

    {/* Accessing tracks props passed in from modelViewer */}
    const trackListing = Object.keys(props.tracks)
        .map(tracksKey =>{
            return (
                <li key={tracksKey}>
                <span style={{textTransform:'capitalize'}}>{tracksKey}</span>:{props.tracks[tracksKey]}
            </li>);
        });
    return(
    <Fragment>
        <h3>Your tracks</h3>
    <p>All Dem tracks Though...</p>
        <ul>
            {trackListing}
        </ul>
    </Fragment>
    );
};

export default albumListing