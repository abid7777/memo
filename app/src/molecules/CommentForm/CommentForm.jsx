import { AiOutlineArrowRight } from 'react-icons/ai';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import cx from 'classnames';
import _noop from 'lodash/noop';

import Button, { VARIANTS } from '../../atoms/Button';
import TextArea from '../../atoms/Textarea';

function CommentForm({ onComment }) {
  const ref = useRef(null);
  const [comment, setComment] = useState('');

  return (
    <div>
      <div className="flex flex-col gap-5 items-center md:flex-row md:items-start">
        <div className={cx('shrink-0 w-12 h-12 bg-gray-800 rounded-full')} />
        <TextArea
          forwardRef={ref}
          wrapperClass="grow w-full lg:w-auto"
          value={comment}
          onInput={setComment}
        />
      </div>
      <div className="flex gap-5 justify-end mt-8">
        <Button
          className="group"
          variant={VARIANTS.LINK}
          onClick={() => { if (ref.current) { ref.current.innerText = ''; } }}
        >
          <div className="flex gap-1 items-center text-gray-400 transition-transform group-hover:scale-110">
            <span>Cancel</span>
          </div>
        </Button>
        <Button className="group" variant={VARIANTS.PRIMARY} onClick={() => onComment(comment)}>
          <div className="flex gap-1 items-center transition-transform group-hover:scale-110">
            <span>Comment</span>
            <AiOutlineArrowRight />
          </div>
        </Button>
      </div>
    </div>
  );
}

CommentForm.propTypes = {
  onComment: PropTypes.func,
};

CommentForm.defaultProps = {
  onComment: _noop,
};

export default CommentForm;
