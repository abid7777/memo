import { useQuery } from 'react-query';

import fetchClient from '../../utils/fetchClient';

const fetchRelatedPosts = (postID) => fetchClient(`/api/v1/post/related/${postID}`);

export default function useRelatedPost(postID) {
  return useQuery(['related-post', postID], () => fetchRelatedPosts(postID), { suspense: true, useErrorBoundary: true });
}
