import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import PostDetailTemplate from '../templates/PostDetail.template';

function PostDetail() {
  const { postID } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    fetch(`/api/v1/post/${postID}`)
      .then((res) => res.json())
      .then((res) => setPost(res.post))
      .catch(() => setPost(null));

    fetch('/api/v1/post/related')
      .then((res) => res.json())
      .then((res) => setRelatedPosts(res.posts))
      .catch(() => setRelatedPosts([]));
  }, [postID]);

  if (!post) { return 'Loading'; }

  return <PostDetailTemplate post={post} relatedPosts={relatedPosts} />;
}

export default PostDetail;
