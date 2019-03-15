import { connect } from 'react-redux';
import Quotes from '../../components/quote/Quote';
import { fetchQuote } from '../../actions/simpsons';
import { getQuote, getCharacterImage, getCharacterName, isLoading } from '../../selectors/simpsons';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  quotes: getQuote(state),
  characters: getCharacterName(state),
  image: getCharacterImage(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote);
  }
});

const SimpsonQuote = withFetch(Quotes);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonQuote);
