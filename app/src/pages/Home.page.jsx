import PropTypes from 'prop-types';
import React from 'react';
import _flowRight from 'lodash/flowRight';
import _get from 'lodash/get';

import ErrorDialog from '../molecules/ErrorDialog';
import TrendingPostListTemplate from '../templates/TrendingPostList.template';
import useTrendingPost from '../hooks/api/useTrendingPost';
import withReactQueryErrorBoundary from '../hocs/withReactQueryErrorBoundary';
import withSuspense from '../hocs/withSuspense';

function HomeErrorDialog({ resetErrorBoundary }) {
  return (
    <ErrorDialog title="Error" body="Something went wrong" onTryAgain={resetErrorBoundary} />
  );
}

function Home() {
  const { data } = useTrendingPost();

  return <TrendingPostListTemplate posts={_get(data, 'posts', [])} />;
}

HomeErrorDialog.propTypes = {
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default _flowRight(withSuspense, withReactQueryErrorBoundary)(Home, Home);
