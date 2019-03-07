import React from 'react';
import PropTypes from 'prop-types';

function Load({ fetch }) {
  return (
    <button onClick={fetch}>New Quote</button>
  );
}

Load.propTypes = {
  fetch: PropTypes.func.isRequired
};

export default Load;
