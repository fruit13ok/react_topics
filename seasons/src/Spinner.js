import React from 'react';

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// defaultProps means when parent didn't pass in props.message
// use this default message
// same as {props.message || 'Loading...'}
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;