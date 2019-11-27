/* eslint-env mocha */

import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import FlashMessage from '../../components/FlashMessage';

describe('<FlashMessage />', () => {
  it('should render with success', () => {
    const msg = 'Success message';
    const flashMsg = {
      type: 'success',
      message: msg,
    };

    const wrapper = mount(<FlashMessage showFlash flash={flashMsg} />);
    const alert = wrapper.find('.alert');

    assert.strictEqual(alert.length, 1);
    assert.strictEqual(alert.text(), msg);
    assert(alert.hasClass('alert-success'));
  });

  it('should render with failure', () => {
    const msg = 'Failure message';
    const flashMsg = {
      type: 'danger',
      message: msg,
    };

    const wrapper = mount(<FlashMessage showFlash flash={flashMsg} />);
    const alert = wrapper.find('.alert');

    assert.strictEqual(alert.length, 1);
    assert.strictEqual(alert.text(), msg);
    assert(alert.hasClass('alert-danger'));
  });

  it('should not render when showFlash is false', () => {
    const wrapper = mount(<FlashMessage showFlash={false} />);
    const alert = wrapper.find('.alert');

    assert.strictEqual(alert.length, 0);
  });
});
