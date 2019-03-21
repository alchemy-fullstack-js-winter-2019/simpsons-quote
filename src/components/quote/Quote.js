import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';

export default function Quote({ quote, characterName, characterImage, fetch }) {
  return (
    <div>
      <p>{quote}</p>
      <p>{characterName}</p>
      <img src={characterImage} />
      <Load fetch={fetch} />
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired
};
