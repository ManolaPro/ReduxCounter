import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, res}) => { 
  return (
        <div className="content">
        <div className="counter__wrapper">
    <h1 className="counter">{counter}</h1>
        </div>
        <div className="btn__wrapper">
          <button onClick={inc} className="btn btn__green">
            <img src="./Vector(2).svg" alt="plus"/>
          </button>
          <button onClick={dec} className="btn btn__yelow">
            <img src="./Minus.svg" alt="minus"/>
          </button >
          <button onClick={res} className="btn btn__red">
            <img src="./Group.svg" alt="reset"/>
          </button>
        </div>
      </div>
    );
}

const mapStateToProps = (state) => {
	return {
    	counter: state
  	}
}

export default connect(mapStateToProps, actions)(Counter);



