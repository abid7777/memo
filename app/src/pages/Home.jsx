import React, { useEffect, useState } from 'react';

import PostCardList from '../organisms/PostCardList/PostCardList';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/v1/post')
      .then((res) => res.json())
      .then(({ posts: p }) => setPosts(p))
      .catch(() => setPosts([]));
  }, []);

  return (
    <div>
      <PostCardList posts={posts} />
    </div>
  );
}

export default Home;
