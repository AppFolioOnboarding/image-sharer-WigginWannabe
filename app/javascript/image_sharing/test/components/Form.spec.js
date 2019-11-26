/* eslint-env mocha */

import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import Form from '../../components/Form';

describe('<Form />', () => {
  it('should have a text input for name', () => {
    const wrapper = mount(<Form />);
    const nameField = wrapper.find('#feedback_name');

    assert(nameField.is('input[type="text"]'));
  });

  it('should have a textarea for comments', () => {
    const wrapper = mount(<Form />);
    const commentField = wrapper.find('#feedback_comments');

    assert(commentField.is('textarea'));
  });

  it('should have a submit button', () => {
    const wrapper = mount(<Form />);
    const submitField = wrapper.find('button');

    assert(submitField.is('button[type="submit"]'));
    assert.strictEqual(submitField.text(), 'Submit');
  });
});