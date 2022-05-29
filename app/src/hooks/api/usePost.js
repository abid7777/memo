import { useQuery } from 'react-query';

import fetchClient from '../../utils/fetchClient';

const fetchPost = (postID) => fetchClient(`/api/v1/post/${postID}`);

export default function usePost(postID) {
  return useQuery(['post', postID], () => fetchPost(postID), { suspense: true, useErrorBoundary: true });
}
