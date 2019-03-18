import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';



function Quotes({ quote, characterImg, characterName }) {
  return (
    <>
      <section 
        className={css`
        overflow: auto;
        font-family: helvetica;
        width: 100%;
    `}>
        <h2>{characterName}</h2>
        <p>{quote}</p>
        <img src={characterImg} />
      </section>
    </>
  );
}

Quotes.propTypes = {
  quote: PropTypes.string.isRequired,
  characterImg: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired
};
export default Quotes;

