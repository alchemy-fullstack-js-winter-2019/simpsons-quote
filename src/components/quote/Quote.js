import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote, name, image }) {
  return (
    <>
    <p>{quote}</p>
    <p>{name}</p>
    <p><img src={image} /></p>
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
export default Quote;
