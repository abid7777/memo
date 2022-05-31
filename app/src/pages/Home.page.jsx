import React from 'react';
import _flowRight from 'lodash/flowRight';
import _get from 'lodash/get';

import GeneralErrorAlert from '../organisms/GeneralErrorAlert';
import TrendingPostListTemplate from '../templates/TrendingPostList.template';
import useTrendingPost from '../hooks/api/useTrendingPost';
import withGeneralErrorTarget from '../hocs/withGeneralErrorTarget';
import withReactQueryErrorBoundary from '../hocs/withReactQueryErrorBoundary';
import withSuspense from '../hocs/withSuspense';

function Home() {
  const { data } = useTrendingPost();

  return <TrendingPostListTemplate posts={_get(data, 'posts', [])} />;
}

export default _flowRight(
  (Component) => withReactQueryErrorBoundary(Component, withGeneralErrorTarget(GeneralErrorAlert, 'Trending posts')),
  withSuspense,
)(Home);
