import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


export const withFetch = Component => {
    class withFetch extends PureComponent {
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
                {isLoading ?
                    <h1>Is loading?</h1 >
                    : <Component {...this.props} />}
                </>

            );
        }

    }
    return withFetch;
};
