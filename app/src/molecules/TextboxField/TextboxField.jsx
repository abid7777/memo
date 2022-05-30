import PropTypes from 'prop-types';
import React from 'react';
import _noop from 'lodash/noop';

import Label from '../../atoms/Label';
import Textbox from '../../atoms/Textbox';

function TextboxField({ labelText, value, onInput }) {
  return (
    <div className="relative">
      <Textbox
        className="peer p-2 w-full placeholder:text-transparent"
        placeholder={labelText}
        textareaClass="textarea"
        value={value}
        onInput={onInput}
      >
        <Label
          text={labelText}
          className="label"
        />
      </Textbox>
    </div>
  );
}

TextboxField.propTypes = {
  labelText: PropTypes.string,
  value: PropTypes.string,
  onInput: PropTypes.func,
};

TextboxField.defaultProps = {
  labelText: '',
  value: '',
  onInput: _noop,
};

export default TextboxField;
