import React from 'react';
import {shallow} from 'enzyme';

import {InfoModal} from './info-modal';
import {toggleInfoModal} from '../actions'

describe('<InfoModal />', () => {
  
    it('Renders without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Fires the onClose callback when the close button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<InfoModal dispatch={callback} />);
        wrapper.find('.close').simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalledWith(toggleInfoModal());
    });

});