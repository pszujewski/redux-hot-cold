import reducer from './reducer';

import { newGame, makeGuess, toggleInfoModal, NEW_GAME, MAKE_GUESS, TOGGLE_INFO_MODAL } from './actions';

describe('The reducer', () => {

  it('Should set the initial state when nothing is passed in', () => { 
      const state = reducer(undefined, {type: '__UNKNOWN'});
      expect(state.guesses).toEqual([]);
      expect(state.feedback).toEqual('Make your guess!');
      expect(typeof state.correctAnswer).toEqual('number');
      expect(state.showInfoModal).toEqual(false);
  });

  it('Should return the current state on an unknown action', () => {
      let currentState = {};
      const state = reducer(currentState, {type: '__UNKNOWN'});
      expect(state).toBe(currentState);
  });

});

describe('The reducer', () => {

  it('Should start a new game and re-initialize state', () => {
    const dummyState = {
      guesses: [23, 45, 67, 87, 5, 43, 67],
      feedback: 'This is a string',
      correctAnswer: 42,
      showInfoModal: true
    };
    const state = reducer(dummyState, newGame());
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(typeof state.correctAnswer).toEqual('number');
    expect(state.showInfoModal).toEqual(false);
  });

  it('Should add a guess and return correct feedback to state. Other properties should not be modified', () => {
    const state = {
      guesses: [42, 56],
      feedback: 'This is a string',
      correctAnswer: 67,
      showInfoModal: true
    };
    const nextState = reducer(state, makeGuess(23));
    expect(nextState.guesses.length).toEqual(3);
    expect(nextState.feedback).toEqual('You\'re Cold...');
    expect(nextState.showInfoModal).toEqual(true)
  });
  
  it('Should toggle the show info modal property in the new state object', () => {
    const state = reducer(undefined, toggleInfoModal());
    expect(state.showInfoModal).toEqual(true);
  });

});