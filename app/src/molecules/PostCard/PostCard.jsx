import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import PostMetaInfo from '../PostMetaInfo';
import postReader from '../../readers/post.reader';

function PostCard({ post }) {
  return (
    <Link
      to={`/posts/${postReader.id(post)}`}
      className="flex overflow-hidden flex-col w-full hover:bg-slate-50 rounded-md shadow-lg transition-colors cursor-pointer md:w-1/3 lg:w-1/4 2xl:w-1/6"
    >
      <div
        className="postcard-image"
        style={{ backgroundImage: `url(${postReader.image(post)})` }}
      />
      <div className="flex flex-col grow p-4">
        <div className="grow">
          <div><h3 className="text-xl line-clamp-2">{postReader.title(post)}</h3></div>
          <div className="mt-4 text-gray-400 line-clamp-3">{postReader.desc(post)}</div>
        </div>
        <PostMetaInfo
          likes={postReader.likesCount(post)}
          comments={postReader.commentsCount(post)}
        />
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

export default PostCard;
