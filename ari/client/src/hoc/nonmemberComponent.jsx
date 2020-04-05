import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default (ChildComponent) => {
  const ComposedComponent = ({ auth, history, ...props }) => {
    const shouldNavigateAway = useCallback(() => {
      if (auth.isLoggedIn) {
        history.push('/');
      }
    }, [auth, history]);

    useEffect(() => {
      shouldNavigateAway();
      return () => {};
    }, [shouldNavigateAway]);

    return <ChildComponent {...props} />;
  };
  const mapStateToProps = ({ auth }) => ({
    auth,
  });

  return withRouter(connect(mapStateToProps)(ComposedComponent));
};
