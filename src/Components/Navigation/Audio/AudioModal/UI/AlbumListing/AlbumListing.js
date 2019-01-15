import React, {Fragment} from 'react';
const albumListing = (props) => {

    {/* Accessing skills props passed in from modelViewer */}
    const skillsForClass = Object.keys(props.skills)
        .map(skillsKey =>{
            return (
                <li key={skillsKey}>
                <span style={{textTransform:'capitalize'}}>{skillsKey}</span>:{props.skills[skillsKey]}
            </li>);
        });
    return(
    <Fragment>
        <h3>Your skills</h3>
    <p>All Dem Skills Though...</p>
        <ul>
            {skillsForClass}
        </ul>
    </Fragment>
    );
};

export default albumListing