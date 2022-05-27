import PropTypes from 'prop-types';
import React from 'react';

function Textbox({ className, value }) {
  return (
    <input
      type="text"
      className={`pb-1 border-b border-b-gray-200 outline-none ${className}`}
      value={value}
    />
  );
}

Textbox.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
};

Textbox.defaultProps = {
  className: '',
  value: '',
};

export default Textbox;
