import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Post from '../organisms/Post';
import PostCommentList from '../organisms/PostCommentList';

function PostDetail() {
  const { postID } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/v1/post/${postID}`)
      .then((res) => res.json())
      .then((res) => setPost(res.post))
      .catch(() => setPost(null));
  }, []);

  if (!post) { return 'Loading'; }

  const { comments = [] } = post;

  return (
    <div>
      <div className="w-full md:w-4/6">
        <Post post={post} />
        <PostCommentList comments={comments} />
      </div>
    </div>
  );
}

export default PostDetail;
