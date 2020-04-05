import React from 'react';
import HomePresenter from './HomePresenter';

// react <-> redux connect
import { connect } from 'react-redux';

<<<<<<< HEAD
// redux action Functions
import { signinFn } from '../../../store/actions/v1/auth.action';

const HomeContainer = ({ authState, postState, signinFn }) => {
  console.log(authState);
  console.log(postState);
  console.log(signinFn);
  return (
    <div>
      <button onClick={signinFn}>CLICK ME</button>
=======
// redux action function
import { signinFn } from '../../../store/actions/v1/auth.action';

const HomeContainer = ({ authState, postState, signinFn }) => {
  return (
    <div>
      <button onClick={signinFn}>CLICK ME!</button>
>>>>>>> 10d2119c656ca6e315546ef1488b7c204fa02f56
      <HomePresenter />
    </div>
  );
};
<<<<<<< HEAD
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     authState: state.authState,
//     postState: state.postState,
//   };
// };
//비구조화랑당해서 더 이쁘게<!DOCTYPE html>
const mapStateToProps = ({ authState, postState }) => ({
  authState,
  postState,
});

export default connect(mapStateToProps, { signinFn })(HomeContainer); //connect()()는 고차함수 hoc
=======

const mapStateToProps = (state) => {
  return {
    authState: state.authState,
    postState: state.postState,
  };
};

export default connect(mapStateToProps, { signinFn })(HomeContainer);
>>>>>>> 10d2119c656ca6e315546ef1488b7c204fa02f56
