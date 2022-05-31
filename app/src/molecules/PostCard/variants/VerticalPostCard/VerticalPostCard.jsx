import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Image from '../../../../atoms/Image';
import PostMetaInfo from '../../../PostMetaInfo';
import postReader from '../../../../readers/post.reader';

function VerticalPostCard({ post }) {
  return (
    <Link
      to={`/posts/${postReader.id(post)}`}
      className="flex overflow-hidden flex-col w-full hover:bg-slate-50 rounded-md shadow-lg transition-colors cursor-pointer"
    >
      <Image alt={postReader.title(post)} src={postReader.image(post)} className="grow-0" />
      <div className="flex flex-col grow p-4">
        <div className="grow">
          <div><h3 className="text-xl line-clamp-2">{postReader.title(post)}</h3></div>
        </div>
        <PostMetaInfo
          likes={postReader.likesCount(post)}
          comments={postReader.commentsCount(post)}
        />
      </div>
    </Link>
  );
}

VerticalPostCard.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

export default VerticalPostCard;
