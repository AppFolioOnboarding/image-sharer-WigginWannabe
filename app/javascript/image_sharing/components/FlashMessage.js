import PropTypes from 'prop-types';
import React from 'react';

export default function FlashMessage(props) {
  if (!props.showFlash) {
    return null
  }

  return (
    <div className={ `alert alert-${props.flash.type}`} role='alert'>
      {props.flash.message}
    </div>
  );
}

FlashMessage.propTypes = {
  showFlash: PropTypes.bool.isRequired,
  flash: PropTypes.object
}
