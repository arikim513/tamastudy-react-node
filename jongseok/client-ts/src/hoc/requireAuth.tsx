import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { IRootState } from '../store/reducers/index';

interface IProps extends RouteComponentProps<any> {
  authState: IRootState['authState'];
}

export default (ChildComponent: any) => {
  const ComposedComponent: React.SFC<IProps> = ({ authState, history, ...props }) => {
    const shouldNavigateAway = useCallback(() => {
      if (!authState.isLoggedIn) {
        history.push('/');
      }
    }, [authState, history]);

    useEffect(() => {
      shouldNavigateAway();
      return () => {};
    }, [shouldNavigateAway]);

    return <ChildComponent {...props} />;
  };
  const mapStateToProps = ({ authState }: IRootState) => ({
    authState,
  });

  return withRouter(connect(mapStateToProps)(ComposedComponent));
};
