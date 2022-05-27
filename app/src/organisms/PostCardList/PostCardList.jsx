import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';

import { VerticalPostCard as PostCard } from '../../molecules/PostCard';
import postReader from '../../readers/post.reader';

function PostCardList({ posts }) {
  return (
    <div className="flex flex-wrap gap-5 justify-evenly">
      {_map(posts, (post) => <PostCard post={post} key={postReader.id(post)} />)}
    </div>
  );
}

PostCardList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PostCardList;
