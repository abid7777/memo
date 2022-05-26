import { HiTrendingUp } from 'react-icons/hi';
import PropTypes from 'prop-types';
import React from 'react';

import PostCardList from '../organisms/PostCardList/PostCardList';

function TrendingPostList({ posts }) {
  return (
    <div>
      <div>
        <h3 className="flex text-3xl cursor-auto select-none md:text-4xl">
          Trending Posts
          <sup><HiTrendingUp /></sup>
        </h3>
      </div>
      <div className="mt-8">
        <PostCardList posts={posts} />
      </div>
    </div>
  );
}

TrendingPostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
};

TrendingPostList.defaultProps = {
  posts: [],
};

export default TrendingPostList;
