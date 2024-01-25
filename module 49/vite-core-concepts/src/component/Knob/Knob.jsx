import React from 'react';

const Knob = props => {
  return (
    <div style={{ border: '5px solid green', margin: '10px', padding: '10px' }}>
      <h3>This is Knob component</h3>
      <p>Knob {props.stepss}</p>
    </div>
  );
};

export default Knob;
