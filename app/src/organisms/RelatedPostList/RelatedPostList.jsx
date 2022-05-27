import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';

import { HorizontalPostCard } from '../../molecules/PostCard';

function RelatedPostList({ posts }) {
  return (
    <div className="w-full h-full">
      <h3 className="mb-4 text-xl">Related Posts</h3>
      <div className="flex flex-wrap gap-5 justify-start my-5 md:justify-evenly lg:flex-col lg:justify-center">
        {_map(posts, (post) => <HorizontalPostCard post={post} />)}
      </div>
      <div className="hidden sticky top-5 justify-center items-center h-screen text-center lg:flex">
        <div>No more posts to display</div>
      </div>
    </div>
  );
}

RelatedPostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default RelatedPostList;
