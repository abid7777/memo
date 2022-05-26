import { format } from 'timeago.js';
import PropTypes from 'prop-types';
import React from 'react';

import Image from '../../atoms/Image';
import commentReader from '../../readers/comment.reader';

function Comment({ comment }) {
  return (
    <div>
      <div className="flex gap-5">
        <div className="overflow-hidden basis-12 shrink-0 w-12 h-12 rounded-full">
          <Image
            src={commentReader.authorAvatar(comment)}
            alt={commentReader.authorName(comment)}
          />
        </div>
        <div>
          <div>
            <h4 className="text-sm font-bold">{commentReader.authorName(comment)}</h4>
            <div className="timestamp">{format(commentReader.createdAt(comment))}</div>
          </div>
          <div className="mt-4">
            {commentReader.body(comment)}
          </div>
        </div>
      </div>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({}).isRequired,
};

export default Comment;
