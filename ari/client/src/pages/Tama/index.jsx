import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../store/actions/counter.action';

const Tama = ({ counter, increment, decrement }) => {
  return (
    <div>
      <h1>Current Counter : {counter}</h1>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ counter }) => ({
  counter,
});

export default connect(mapStateToProps, { increment, decrement })(Tama);
