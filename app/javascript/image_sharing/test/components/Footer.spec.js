/* eslint-env mocha */

import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  it('should display centered foot content', () => {
    const wrapper = mount(<Footer foot='footie' />);
    const footerText = wrapper.find('footer p');
    
    assert(footerText.is('.text-center'));
    assert.strictEqual(footerText.text(), 'footie');
  });
});
