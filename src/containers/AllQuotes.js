import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getQuotes, getCharacterName, getCharacterImg, isLoading } from '../selectors/simpsons';
import { fetchQuotesWithPromise } from '../actions/simpsons';
import Quotes from '../components/quotes/Quotes';
import Load from '../components/quotes/Load';
import { withFetch } from '../components/quotes/withFetch';

  


class AllQuotes extends PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImg: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
      <Load {...this.props}/>
        <Quotes {...this.props} />
      </>
    );
  }
}
const mapStateToProps = state => ({

  quote: getQuotes(state),
  characterName: getCharacterName(state),
  characterImg: getCharacterImg(state),
  isLoading: isLoading(state)  
  
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuotesWithPromise());
  }
});

const AllQuote = withFetch(Quotes);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllQuotes, AllQuote);

