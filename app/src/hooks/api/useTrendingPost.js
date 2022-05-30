import { useQuery } from 'react-query';

import fetchClient from '../../utils/fetchClient';

const fetchTrendingPosts = () => fetchClient('/api/v1/post/trending');

export default function useTrendingPost() {
  return useQuery('trending-posts', fetchTrendingPosts, { suspense: true, useErrorBoundary: true });
}
