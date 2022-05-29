import PropTypes from 'prop-types';
import React from 'react';

import PostTemplate from './Post.template';
import RelatedPostListTemplate from './RelatedPostList.template';

function PostDetailTemplate({ postID }) {
  return (
    <div className="block lg:flex lg:gap-5">
      <div className="mb-12 w-full lg:mb-0 lg:w-4/6">
        <PostTemplate postID={postID} />
      </div>
      <div className="relative ml-auto w-full lg:w-2/6">
        <RelatedPostListTemplate postID={postID} />
      </div>
    </div>
  );
}

PostDetailTemplate.propTypes = {
  postID: PropTypes.string.isRequired,
};

export default PostDetailTemplate;
