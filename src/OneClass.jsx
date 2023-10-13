import { useState } from 'react'

function OneClass({ stundas }) {
  var stunda = stundas.map((element, index) => {
    return <p key={index}>{element}</p>
  });
    return (
      <>
        {stunda}
      </>
    );
  }

export default OneClass