import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import Image from '../../../../atoms/Image';
import PostMetaInfo from '../../../PostMetaInfo';
import postReader from '../../../../readers/post.reader';

function HorizontalPostCard({ post }) {
  return (
    <Link
      to={`/posts/${postReader.id(post)}`}
      className="flex gap-5 w-full hover:bg-slate-50 rounded-md border border-gray-200 shadow-lg transition-colors cursor-pointer"
    >
      <div className="shrink-0 w-32 h-32">
        <Image src={postReader.image(post)} alt={postReader.title(post)} className="h-full" />
      </div>
      <div className="flex flex-col grow py-4 pr-4 w-full">
        <div className="grow">
          <div><h3 className="text-md line-clamp-2">{postReader.title(post)}</h3></div>
        </div>
        <PostMetaInfo
          likes={postReader.likesCount(post)}
          comments={postReader.commentsCount(post)}
        />
      </div>
    </Link>
  );
}

HorizontalPostCard.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

export default HorizontalPostCard;
