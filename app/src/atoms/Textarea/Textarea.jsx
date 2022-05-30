import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import _noop from 'lodash/noop';

function Textarea({
  children, forwardRef, textareaClass, value, wrapperClass, onInput,
}) {
  const currValue = useRef(value);

  return (
    <div className={`relative ${wrapperClass}`}>
      <div
        className={`peer p-2 break-words border-b border-b-gray-200 outline-none ${textareaClass}`}
        contentEditable
        data-value=""
        ref={forwardRef}
        suppressContentEditableWarning
        onInput={(e) => onInput(e.target.innerText)}
      >
        {currValue.current}
      </div>
      <div
        className="absolute -bottom-0 w-full border-t border-t-gray-800 transition-transform scale-x-0 peer-focus:scale-x-100"
      />
      {children}
    </div>
  );
}

Textarea.propTypes = {
  textareaClass: PropTypes.string,
  wrapperClass: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  onInput: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  forwardRef: PropTypes.shape({ current: PropTypes.any }),
};

Textarea.defaultProps = {
  textareaClass: '',
  wrapperClass: '',
  value: '',
  children: null,
  onInput: _noop,
  forwardRef: null,
};

export default Textarea;
