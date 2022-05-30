import { FaCommentAlt, FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import millify from 'millify';
import _noop from 'lodash/noop';

import PostMetaInfoItem from '../../atoms/PostMetaInfoItem';

function PostMetaInfo({
  className, comments, isLikedByMe, likes, onCommentClick, onLikeClick,
}) {
  return (
    <div className={`flex justify-between mt-4 ${className}`}>
      <PostMetaInfoItem onClick={onLikeClick}>
        <FaHeart
          className={cx(
            'peer w-8 text-gray-400 group-hover:text-red-600',
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
  className: PropTypes.string,
  comments: PropTypes.string,
  isLikedByMe: PropTypes.bool,
  likes: PropTypes.string,
  onCommentClick: PropTypes.func,
  onLikeClick: PropTypes.func,
};

PostMetaInfo.defaultProps = {
  className: '',
  comments: '0',
  isLikedByMe: false,
  likes: '0',
  onCommentClick: _noop,
  onLikeClick: _noop,
};

export default PostMetaInfo;
