import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quote from '../../components/quote/Quote';
import { connect } from 'react-redux';
import { getQuote, getCharacterImage, getCharacterName, isLoading } from '../../selectors/simpsons';
import { fetchQuote } from '../../actions/simpsons';
import Load from '../../components/quote/Load';
import WithFetch from '../../components/quote/WithFetch';

const InitFetchWithLoading = WithFetch(Quote);
const ReloadFetchWithLoading = WithFetch(Load);

class SimpsonsQuotes extends PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        <ReloadFetchWithLoading { ...this.props }/>
        <InitFetchWithLoading { ...this.props }/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterImage: getCharacterImage(state),
  characterName: getCharacterName(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuotes);
