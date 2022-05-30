import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import _noop from 'lodash/noop';

import Label from '../../../atoms/Label';
import Textarea from '../../../atoms/Textarea';

function TextareaField({ ref, onInput }) {
  const forwardRef = ref || useRef(null);

  return (
    <div className="relative">
      <Textarea
        forwardRef={forwardRef}
        textareaClassName="textarea"
        onInput={(value) => {
          if (forwardRef.current) { forwardRef.current.setAttribute('data-value', value); }

          onInput(value);
        }}
      >
        <Label text="Description" className="label" />
      </Textarea>
    </div>
  );
}

TextareaField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  ref: PropTypes.shape({ current: PropTypes.any }),
  onInput: PropTypes.func,
};

TextareaField.defaultProps = {
  ref: null,
  onInput: _noop,
};

export default TextareaField;
