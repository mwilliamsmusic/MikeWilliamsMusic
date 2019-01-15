import React from 'react';

const buttonController = (props) => (
  <div>
      {/* Clickable modal method passed through showAlbum = showModalHandler() */}
<button onClick={props.showAlbum}>
    {props.buttonTitle}
</button>

  </div>
);

export default buttonController;