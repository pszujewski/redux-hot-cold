import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import { newGame, makeGuess, toggleInfoModal, NEW_GAME, MAKE_GUESS, TOGGLE_INFO_MODAL } from '../actions';

describe('<GuessForm />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm dispatch={callback} />);
        const value = 10;
        wrapper.find('input[type="text"]').node.value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(makeGuess(value.toString()));
    });

    it('Should reset the input when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm dispatch={callback} />);
        const input = wrapper.find('input[type="text"]');
        input.node.value = 10;
        wrapper.simulate('submit');
        expect(input.node.value).toEqual('');
    });

});