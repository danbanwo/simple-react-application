import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import DisplayPizza from '../src/Components/DisplayPizza';



describe('Tests for DisplayPizza Component', () => {
    let component;
    let props = {
        pizzas: ['Daniel'],
        filterResult: null
    }

    beforeEach(() => {
        component = shallow(<DisplayPizza {...props} />);
    })

    it('should return a ul tag', () => {
        expect(component.find('ul')).to.have.length(1)
    })

    it('should have an h1 tag', () => {
        expect(component.find('h1')).to.have.length(1)
    })

    it('should have a li tag', () => {
        expect(component.find('li')).to.have.length(1)
    })

    props.pizzas.forEach((pizza, i) => {
        it(`should have text: ${pizza}`, () => {
            let h1 = component.find('h1');
            h1.forEach(tag => expect(tag.text()).to.equal(pizza))
        })
    })
})