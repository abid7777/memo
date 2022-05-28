import { useQuery } from 'react-query';

import fetchClient from '../../utils/fetchClient';

const fetchPostComments = (postID) => fetchClient(`/api/v1/post/${postID}/comments`);

export default function useComment(postID) {
  return useQuery(['comments', postID], () => fetchPostComments(postID), { suspense: true });
}
