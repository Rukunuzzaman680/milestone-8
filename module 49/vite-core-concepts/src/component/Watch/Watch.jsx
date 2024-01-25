import React, { useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
  const [steps, setSteps] = useState(0);

  const increase = () => {
    const newtSteps = steps + 1;
    setSteps(newtSteps);
  };
  return (
    <div style={{ border: '5px solid green', margin: '10px', padding: '10px' }}>
      <h2>This is my stop watch</h2>
      <h1>Steps: {steps}</h1>
      <button onClick={increase}>Watch Steps: {steps}</button>
      <Dial steps={steps}></Dial>
    </div>
  );
};

export default Watch;
