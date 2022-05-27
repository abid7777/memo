import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Auth from './pages/Auth';
import Creators from './pages/Creators';
import CreatorPosts from './pages/CreatorPosts';
import Home from './pages/Home.page';
import Me from './pages/Me';
import Navbar from './organisms/Navbar';
import PostDetail from './pages/PostDetail.page';
import Posts from './pages/Posts';
import TagPosts from './pages/TagPosts';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="mb-4">
      <Router>
        <div className="shadow-md">
          <div className="container px-2 mx-auto">
            <Navbar />
          </div>
        </div>
        <div className="container px-2 mx-auto mt-8">
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="posts">
              <Route index element={<Posts />} />
              <Route path=":postID" element={<PostDetail />} />
            </Route>
            <Route path="/creators" element={<Creators />}>
              <Route path=":id" element={<CreatorPosts />} />
            </Route>
            <Route path="/tags/:id" element={<TagPosts />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/me" element={<Me />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
