import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Quote from '../../components/quote/Quote';
import { fetchQuote }  from '../../action/simpsons';
import { getQuote, getCharacterName, getImage } from '../../selectors/simpsons';
// eslint-disable-next-line no-unused-vars
import Load from '../../components/quote/Load';
import PropTypes from 'prop-types';


const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName: getCharacterName(state),
  characterImage: getImage(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuote());
  }
});

class SimpsonsQuote extends PureComponent {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { quote, characterName, characterImage, fetch } = this.props;
    return (
      <>
      <Quote quote={quote} characterName={characterName} characterImage={characterImage} />
      <br/>
      <Load fetch={fetch} />
      </>
    );
  }

}
export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SimpsonsQuote);




// class AllFacts extends PureComponent {
//   //this is confusing because facts is already expected as a prop from our Facts component.
//   static propTypes = {
//     facts: PropTypes.array.isRequired,
//     fetch: PropTypes.func.isRequired
//   };
//   //fetch has to be passed through line 13, and 25 and its a proptype.
//   componentDidMount() {
//     this.props.fetch(100);
//   }

//   render() {
//     const { facts } = this.props;
//     return (
//       <Facts facts={facts} />
//     );
//   }
// }



// const mapDispatchToProps = dispatch => ({
//   fetch(count) {
//     dispatch(fetchFacts(count));
//   }
// });


// export default connect(
//   mapStateToProps, mapDispatchToProps
// )(AllFacts);
