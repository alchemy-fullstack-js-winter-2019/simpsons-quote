import React from 'react';
import PropTypes from 'prop-types';



const Load = ({ fetch }) => {
  return (
    <button onClick={fetch}>Next Quote</button>
  );
};

Load.propTypes = {
  fetch: PropTypes.func.isRequired
};
  
export default Load;
