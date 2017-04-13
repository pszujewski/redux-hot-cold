import { newGame, makeGuess, toggleInfoModal, NEW_GAME, MAKE_GUESS, TOGGLE_INFO_MODAL } from './actions';

describe('Actions', () => {

  it('Should return the new game action object', () => {
      const action = newGame();
      expect(action.type).toEqual(NEW_GAME);
      expect(typeof action.correctAnswer).toEqual('number');
  });

  it('Should return the makeGuess action object', () => {
    const guess = 56;
    const action = makeGuess(guess);
    expect(action.type).toEqual(MAKE_GUESS);
    expect(typeof action.guess).toEqual('number');
    expect(action.guess).toEqual(guess);
  });

  it('Should return the toggle info modal action object', () => {
    const action = toggleInfoModal();
    expect(action.type).toEqual(TOGGLE_INFO_MODAL);
    const numProps = Object.keys(action);
    expect(numProps.length).toEqual(1);
  });

});