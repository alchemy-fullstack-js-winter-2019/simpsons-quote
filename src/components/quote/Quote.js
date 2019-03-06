import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote, character, image }) {
  return (
		<>
			<h2>{character}</h2>
			<h4>{quote}</h4>
			<img src={image} />
		</>
  );
}

Quote.proTypes = {
  quote: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Quote;
