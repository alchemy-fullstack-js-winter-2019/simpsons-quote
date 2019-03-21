import React from 'react';
import PropTypes from 'prop-types';

export default function Load({ fetch }) {
  return (
    <>
      <button onClick={fetch}>LOAD</button>
    </>
  );
}

Load.propTypes = {
  fetch: PropTypes.func.isRequired
};
