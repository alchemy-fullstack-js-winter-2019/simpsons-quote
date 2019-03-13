import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';

function Quote({ quote, characterName, characterImage, fetch, loading }) {
  return (
    <>
    {loading ? <h1>IS still LOADING...</h1> :
      <div>
        <h3>{quote}</h3>
        <h4>- {characterName}</h4>
        <p><img src={characterImage} /></p>
        <Load fetch={fetch}/>
      </div>
    }
    </>  
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Quote;
