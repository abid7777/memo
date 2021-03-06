import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';

import Comment from '../../molecules/Comment';

function PostCommentList({ comments }) {
  return (
    <div>
      <div className="text-xl font-bold">Comments</div>
      <div className="flex flex-col gap-8 mt-8">
        {/* eslint-disable-next-line no-underscore-dangle */}
        {_map(comments, (comment) => <Comment comment={comment} key={comment._id} />)}
      </div>
    </div>
  );
}

PostCommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PostCommentList;
