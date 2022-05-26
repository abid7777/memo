import React, { useState, useEffect } from 'react';
import TrendingPostList from '../templates/TrendingPostList';

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
      <TrendingPostList posts={posts} />
    </div>
  );
}

export default Home;
