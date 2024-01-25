import React from 'react';
import Details from '../Device-details/Details';

const Device = props => {
  return (
    <div
      style={{
        border: '5px solid lightgreen',
        margin: '10px',
        padding: '10px',
      }}
    >
      <h2>JSX Device Component</h2>
      <h4>I have a phone {props.brand}</h4>
      {/* <h4>My phone price{props.price}</h4> */}
      <Details rate={props.price}></Details>
    </div>
  );
};

export default Device;
