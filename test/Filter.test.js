import React from 'react';
import { expect } from 'chai'; 
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Filter from '../src/Components/Filter';



describe('Tests for Filter Component', () => {
    let component;
    let props = {
        handleChange: () => {},
        sortedPizza: () => {}
    }

    let tags = ['div', 'label', 'input', 'button']

    beforeEach(() => {
        component = shallow(<Filter {...props} />);
    })

    tags.forEach(tag => {
        it(`should have 1 ${tag} tag`, () => {
            expect(component.find(tag)).to.have.length(1)
        })
    })

    describe('button tag', () => {
        it('should have text sort', () => {
            expect(component.find('button').text()).to.equal('Sort')
        })
    })
})