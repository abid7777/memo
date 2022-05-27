import PropTypes from 'prop-types';
import React from 'react';

import Post from '../organisms/Post';
import PostCommentTemplate from './PostComment.template';
import RelatedPostList from '../organisms/RelatedPostList';
import postReader from '../readers/post.reader';

function PostDetailTemplate({ post, relatedPosts }) {
  return (
    <div className="block lg:flex lg:gap-5">
      <div className="mb-4 w-full lg:mb-0 lg:w-4/6">
        <div className="pb-8 border-b border-b-gray-200">
          <Post post={post} />
        </div>
        <div>
          <PostCommentTemplate comments={postReader.comments(post) || []} />
        </div>
      </div>
      <div className="relative ml-auto w-full lg:w-2/6">
        <RelatedPostList posts={relatedPosts} />
      </div>
    </div>
  );
}

PostDetailTemplate.propTypes = {
  post: PropTypes.shape({}).isRequired,
  relatedPosts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PostDetailTemplate;
