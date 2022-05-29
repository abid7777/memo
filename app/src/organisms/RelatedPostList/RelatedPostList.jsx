import { RiErrorWarningLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import React from 'react';
import _map from 'lodash/map';

import { HorizontalPostCard } from '../../molecules/PostCard';
import Badge from '../../atoms/Badge';
import PropertyControlledComponent from '../../atoms/PropertyControlledComponent';

function RelatedPostList({ posts }) {
  return (
    <div className="w-full h-full">
      <h3 className="flex gap-1 mb-4 text-2xl cursor-auto select-none md:text-2xl">
        Related Posts
        <Badge count={posts.length} />
      </h3>
      <PropertyControlledComponent shouldRender={posts.length}>
        <div className="grid grid-cols-1 gap-5 my-5 md:grid-cols-2 lg:grid-cols-1">
          {_map(posts, (post) => <HorizontalPostCard post={post} />)}
        </div>
      </PropertyControlledComponent>
      <PropertyControlledComponent shouldRender={!posts.length}>
        <div className=" flex gap-2 justify-center items-center text-yellow-500">
          <RiErrorWarningLine />
          <span>No related posts found.</span>
        </div>
      </PropertyControlledComponent>
    </div>
  );
}

RelatedPostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default RelatedPostList;
