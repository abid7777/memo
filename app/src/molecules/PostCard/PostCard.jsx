import { FaCommentAlt, FaHeart } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import millify from 'millify';

import postReader from '../../readers/post.reader';

function PostCard({ post }) {
  return (
    <div className="flex overflow-hidden flex-col w-full hover:bg-slate-50 rounded-md shadow-lg transition-colors cursor-pointer md:w-1/3 lg:w-1/4 2xl:w-1/6">
      <div
        className="postcard-image"
        style={{ backgroundImage: `url(${postReader.image(post)})` }}
      />
      <div className="flex flex-col grow p-4">
        <div className="grow">
          <div><h3 className="text-xl line-clamp-2">{postReader.title(post)}</h3></div>
          <div className="mt-4 text-gray-400 line-clamp-3">{postReader.desc(post)}</div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="group inline-flex flex-row-reverse items-center mt-4">
            <FaHeart
              className={cx(
                'w-8 peer text-gray-400 group-hover:text-red-600',
                { 'text-red-600': postReader.likedByMe(post) },
              )}
            />
            <span className="text-xs text-gray-400 group-hover:text-red-600 transition-colors">
              {millify(postReader.likes(post) || 0)}
            </span>
          </div>
          <div className="group inline-flex flex-row-reverse items-center mt-4">
            <FaCommentAlt
              className="w-8 text-gray-400 group-hover:text-blue-600"
            />
            <span className="text-xs text-gray-400 group-hover:text-blue-600 transition-colors">
              {millify(postReader.comments(post) || 0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,
    likes: PropTypes.string,
    likedByMe: PropTypes.bool,
  }).isRequired,
};

export default PostCard;
