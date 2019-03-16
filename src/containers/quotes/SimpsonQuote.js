import { connect } from 'react-redux';
import Quote from '../../components/quote/Quote';
import { fetchQuote } from '../../actions/simpsons';
import { getQuote, getCharacterName, getCharacterImage, isLoading } from '../../selectors/simpsons';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  quote: getQuote(state),
  name: getCharacterName(state),
  image: getCharacterImage(state),
  isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

const SimpsonQuote = withFetch(Quote);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonQuote);
