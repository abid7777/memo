import PropTypes from 'prop-types';
import React from 'react';

function Label({ className, htmlFor, text }) {
  return <label className={`text-gray-400 ${className}`} htmlFor={htmlFor}>{text}</label>;
}

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Label.defaultProps = {
  className: '',
};

export default Label;
