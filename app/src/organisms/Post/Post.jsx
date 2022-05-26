import PropTypes from 'prop-types';
import React from 'react';

import Image from '../../atoms/Image';
import RelativeDate from '../../atoms/RelativeDate';
import PostMetaInfo from '../../molecules/PostMetaInfo';
import postReader from '../../readers/post.reader';

function Post({ post }) {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="overflow-hidden w-12 h-12 rounded-full">
          <Image
            src={postReader.authorAvatar(postReader)}
            alt={postReader.authorName(postReader)}
          />
        </div>
        <div>
          <h3 className="text-xl">{postReader.authorName(postReader)}</h3>
          <RelativeDate dateTime={postReader.createdAt(post)} />
        </div>
      </div>
      <div className="mt-8 text-2xl">{postReader.title(post)}</div>
      <div className="mt-8">
        <Image src={postReader.image(post)} alt={postReader.title(post)} className="w-full" />
      </div>
      <PostMetaInfo
        likes={postReader.likesCount(post)}
        comments={postReader.commentsCount(post)}
      />
      <div className="pb-8 mt-8 border-b border-b-gray-200">
        {postReader.desc(post)}
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({}).isRequired,
};

export default Post;
