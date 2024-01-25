import React from 'react';
import Knob from '../Knob/Knob';

const Dial = props => {
  return (
    <div
      style={{
        border: '5px solid lightgreen',
        margin: '10px',
        padding: '10px',
      }}
    >
      <h2>Dial Component</h2>
      <p>Count {props.steps}</p>
      <Knob stepss={props.steps}></Knob>
    </div>
  );
};

export default Dial;
