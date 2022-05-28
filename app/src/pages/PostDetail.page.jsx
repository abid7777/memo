import { useParams } from 'react-router-dom';
import React from 'react';

import PostDetailTemplate from '../templates/PostDetail.template';

function PostDetail() {
  const { postID } = useParams();

  return <PostDetailTemplate postID={postID} />;
}

export default PostDetail;
