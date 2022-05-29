import { FaCommentAlt, FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import millify from 'millify';
import _noop from 'lodash/noop';

import PostMetaInfoItem from '../../atoms/PostMetaInfoItem';

function PostMetaInfo({
  likes, comments, className, isLikedByMe, onLikeClick, onCommentClick,
}) {
  return (
    <div className={`flex justify-between mt-4 ${className}`}>
      <PostMetaInfoItem onClick={onLikeClick}>
        <FaHeart
          className={cx(
            'w-8 peer text-gray-400 group-hover:text-red-600',
            { 'text-red-600': isLikedByMe },
          )}
        />
        <span className="text-xs text-gray-400 group-hover:text-red-600 transition-colors">
          {millify(likes)}
        </span>
      </PostMetaInfoItem>
      <PostMetaInfoItem onClick={onCommentClick}>
        <FaCommentAlt
          className="w-8 text-gray-400 group-hover:text-blue-600"
        />
        <span className="text-xs text-gray-400 group-hover:text-blue-600 transition-colors">
          {millify(comments)}
        </span>
      </PostMetaInfoItem>
    </div>
  );
}

PostMetaInfo.propTypes = {
  likes: PropTypes.string,
  comments: PropTypes.string,
  className: PropTypes.string,
  isLikedByMe: PropTypes.bool,
  onLikeClick: PropTypes.func,
  onCommentClick: PropTypes.func,
};

PostMetaInfo.defaultProps = {
  likes: '0',
  comments: '0',
  className: '',
  isLikedByMe: false,
  onLikeClick: _noop,
  onCommentClick: _noop,
};

export default PostMetaInfo;
