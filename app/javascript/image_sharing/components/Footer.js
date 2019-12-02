import PropTypes from 'prop-types';
import React from 'react';

export default function Footer(props) {
  return (
    <footer>
      <p className='text-center'><small>{props.foot}</small></p>
    </footer>
  );
}

Footer.propTypes = {
  foot: PropTypes.string.isRequired
};
