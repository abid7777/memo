import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import _noop from 'lodash/noop';

function Textarea({
  textareaClass, wrapperClass, value, onInput, forwardRef,
}) {
  const currValue = useRef(value);

  return (
    <div className={`relative ${wrapperClass}`}>
      <div
        ref={forwardRef}
        className={`peer p-2 border-b border-b-gray-200 outline-none break-words ${textareaClass}`}
        contentEditable
        onInput={(e) => onInput(e.target.innerText)}
        suppressContentEditableWarning
      >
        {currValue.current}
      </div>
      <div
        className="absolute -bottom-0 w-full border-t border-t-gray-800 transition-transform scale-x-0 peer-focus:scale-x-100"
      />
    </div>
  );
}

Textarea.propTypes = {
  textareaClass: PropTypes.string,
  wrapperClass: PropTypes.string,
  value: PropTypes.string,
  onInput: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  forwardRef: PropTypes.shape({ current: PropTypes.any }),
};

Textarea.defaultProps = {
  textareaClass: '',
  wrapperClass: '',
  value: '',
  onInput: _noop,
  forwardRef: null,
};

export default Textarea;
