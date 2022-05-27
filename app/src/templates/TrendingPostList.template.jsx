import { HiTrendingUp } from 'react-icons/hi';
import PropTypes from 'prop-types';
import React from 'react';

import PostCardList from '../organisms/PostCardList/PostCardList';

function TrendingPostListTemplate({ posts }) {
  return (
    <div>
      <div>
        <h3 className="flex text-3xl cursor-auto select-none md:text-4xl">
          Trending Posts
          <sup><HiTrendingUp /></sup>
        </h3>
      </div>
      <div className="mt-8"><PostCardList posts={posts} /></div>
    </div>
  );
}

TrendingPostListTemplate.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})),
};

TrendingPostListTemplate.defaultProps = {
  posts: [],
};

export default TrendingPostListTemplate;
