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
      <div className="shrink-0 w-32 h-full">
        <Image src={postReader.image(post)} alt={postReader.title(post)} className="object-cover w-full h-full aspect-none" />
      </div>
      <div className="flex overflow-hidden flex-col grow py-4 pr-4 w-full">
        <div className="grow min-w-0">
          <h4 className="overflow-hidden text-base text-ellipsis whitespace-nowrap">{postReader.title(post)}</h4>
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
