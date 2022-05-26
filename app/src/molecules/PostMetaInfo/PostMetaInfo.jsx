import { FaCommentAlt, FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import millify from 'millify';

import PostMetaInfoItem from '../../atoms/PostMetaInfoItem';

function PostMetaInfo({ likes, comments, isLikedByMe }) {
  return (
    <div className="flex justify-between mt-4">
      <PostMetaInfoItem>
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
      <PostMetaInfoItem>
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
  isLikedByMe: PropTypes.bool,
};

PostMetaInfo.defaultProps = {
  likes: '0',
  comments: '0',
  isLikedByMe: false,
};

export default PostMetaInfo;
