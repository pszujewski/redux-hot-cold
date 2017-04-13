import React from 'react';
import {shallow} from 'enzyme';

// You need to import only the non-connected component. Thus, not what was exported by the 'default'
import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {

    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Renders the correct guess count', () => {
        const value = 5;
        const wrapper = shallow(<GuessCount count={value} />);
        expect(wrapper.text()).toEqual(`Guess #${value}!`);
    });
    
});