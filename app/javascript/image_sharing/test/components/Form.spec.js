/* eslint-env mocha */

import assert from 'assert';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import * as helper from '../../utils/helper';

import React from 'react';
import Form from '../../components/Form';
import FlashMessage from '../../components/FlashMessage';

describe('<Form />', () => {
  it('should have a text input for name', () => {
    const wrapper = shallow(<Form />);
    const nameField = wrapper.find('#feedback_name');

    assert(nameField.is('input[type="text"]'));
  });

  it('should update the name field of state when the input value changes', () => {
    const wrapper = shallow(<Form />);
    wrapper.find('#feedback_name').simulate('change', { target: { value: 'Test Name' } });

    assert.strictEqual(wrapper.state('name'), 'Test Name');
  });

  it('should have a textarea for comments', () => {
    const wrapper = shallow(<Form />);
    const commentField = wrapper.find('#feedback_comments');

    assert(commentField.is('textarea'));
  });

  it('should update the comments field of state when the textarea value changes', () => {
    const wrapper = shallow(<Form />);
    wrapper.find('#feedback_comments').simulate('change', { target: { value: 'This is a test comment.' } });

    assert.strictEqual(wrapper.state('comments'), 'This is a test comment.');
  });

  it('should have a submit button', () => {
    const wrapper = shallow(<Form />);
    const submitField = wrapper.find('button');

    assert(submitField.is('button[type="submit"]'));
    assert.strictEqual(submitField.text(), 'Submit');
  });

  it('should make a post request with state information as parameters when submitted', () => {
    const stub = sinon.stub(helper, 'post').resolves();

    const wrapper = shallow(<Form />);
    wrapper.find('#feedback_name').simulate('change', { target: { value: 'Test Name' } });
    wrapper.find('#feedback_comments').simulate('change', { target: { value: 'This is a test comment.' } });

    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    assert(stub.calledOnce);
    assert(stub.calledWith('/api/feedbacks', {
      name: 'Test Name',
      comments: 'This is a test comment.',
    }));

    stub.restore();
  });

  it('should clear the form after post', () => {
    const stub = sinon.stub(helper, 'post').resolves();

    const wrapper = shallow(<Form />);
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    assert.strictEqual(wrapper.find('#feedback_name').text(), '');
    assert.strictEqual(wrapper.find('#feedback_comments').text(), '');

    stub.restore();
  });

  it('should display a success flash when post is successful', () => {
    const stub = sinon.stub(helper, 'post').resolves();

    const wrapper = shallow(<Form />);
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });

    console.log(wrapper.find(FlashMessage).props());
    console.log(wrapper.state())
    assert(wrapper.find(FlashMessage).prop('showFlash'));

    stub.restore();
  });

  it('should display a failure flash when post fails', () => {

  });
});
