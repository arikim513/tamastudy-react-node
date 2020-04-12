import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default (ChildComponent, isRequire = true) => {
  const ComposedComponent = (props) => {
    const history = useHistory();

    const handleRoutingFn = useCallback(() => {
      if (isRequire) {
        if (!props.authState.loading && !props.authState.isLoggedIn) {
          history.push('/');
        }
      } else {
        if (!props.authState.loading && props.authState.isLoggedIn) {
          history.push('/');
        }
      }
    }, [history, props.authState.loading, props.authState.isLoggedIn]);

    useEffect(() => {
      handleRoutingFn();
    }, [handleRoutingFn]);

    if (props.authState.loading) {
      return <div>Loading ...</div>;
    }

    return <ChildComponent {...props} />;
  };

  const mapStateToProps = ({ authState }) => ({
    authState,
  });
  return connect(mapStateToProps, {})(ComposedComponent);
};
