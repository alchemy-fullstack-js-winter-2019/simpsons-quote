import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export const withFetch = Component => {
  class WithFetch extends PureComponent {
    static propTypes = {
      fetch: PropTypes.func.isRequired,
      isLoading: PropTypes.bool.isRequired
    };

    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { isLoading } = this.props;
      return (
        <>
        <div className='loadingScreen'>
          {isLoading ?
            <img src="../../asset/Punishment_loader.png"></img> : <Component {...this.props} />}
        </div>
        </>
      );
    }
  }

  return WithFetch;
};
