import React from 'react';
import HomePresenter from './HomePresenter';

// react <-> redux connect
import { connect } from 'react-redux';

// redux action function
import { signinFn } from '../../../store/actions/v1/auth.action';

const HomeContainer = ({ authState, postState, signinFn }) => {
  return (
    <div>
      <button onClick={signinFn}>CLICK ME!</button>
      <HomePresenter />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
    postState: state.postState,
  };
};

//비구조화할당해서 더 이쁘게도 가능!!
// const mapStateToProps = ({ authState, postState }) => ({
//   authState,
//   postState,
// });

export default connect(mapStateToProps, { signinFn })(HomeContainer);
