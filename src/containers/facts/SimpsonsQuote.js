import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quote from '../../components/quote/Quote';
import { getCharacter, getImage, getQuote } from '../../selectors/simpsons';
import { fetchQuote } from '../../actions/simpsons';
import { connect } from 'react-redux';
import Load from '../../components/quote/Load';

class SimpsonsQuote extends PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
        <Load {...this.props} />
        <Quote {...this.props} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  quote: getQuote(state),
  character: getCharacter(state),
  image: getImage(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
