import React from 'react';

const buttonController = (props) => (
  <div>
      {/* Clickable modal method passed through showSkills = showModalHandler() */}
<button onClick={props.showSkills}>
    Skills Skills Skills
</button>

  </div>
);

export default buttonController;