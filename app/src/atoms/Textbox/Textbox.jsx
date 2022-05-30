import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

function Textbox({
  children, className, placeholder, value, onInput,
}) {
  return (
    <div className="relative">
      <input
        type="text"
        className={`pb-1 bg-slate-50 border-b border-b-gray-200 outline-none ${className}`}
        placeholder={placeholder}
        value={value}
        onInput={(e) => onInput(e.target.value)}
      />
      <div
        className="absolute -bottom-0 w-full border-t border-t-gray-800 transition-transform scale-x-0 peer-focus:scale-x-100"
      />
      {children}
    </div>
  );
}

Textbox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onInput: PropTypes.func,
};

Textbox.defaultProps = {
  className: '',
  children: null,
  placeholder: '',
  value: '',
  onInput: _noop,
};

export default Textbox;
