import React, {Fragment} from 'react';
const albumListing = (props) => {

    {/* Accessing skills props passed in from modelViewer */}
    const tracksForAlbums = Object.keys(props.tracks)
        .map(tracksKey =>{
            return (
                <li key={tracksKey}>
                <span style={{textTransform:'capitalize'}}>{tracksKey}</span>:{props.tracks[tracksKey]}
            </li>);
        });
    return(
    <Fragment>
        <h3>{props.title}</h3>

        <ul>
            {tracksForAlbums}
        </ul>
    </Fragment>
    );
};

export default albumListing;