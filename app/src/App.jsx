import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';

import Auth from './pages/Auth';
import CreatePost from './pages/CreatePost';
import CreatorPosts from './pages/CreatorPosts';
import Home from './pages/Home.page';
import Navbar from './organisms/Navbar';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail.page';
import Posts from './pages/Posts';
import UserProfile from './pages/UserProfile';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mb-4">
        <Router>
          <div className="fixed top-0 left-0 z-30 w-full bg-slate-50/95 shadow-md ">
            <div className="container px-2 mx-auto"><Navbar /></div>
          </div>
          <div className="container px-2 mx-auto mt-[calc(var(--header-height)+var(--header-margin-bottom))]">
            <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="posts">
                <Route index element={<Posts />} />
                <Route path=":postID" element={<PostDetail />} />
                <Route path="create" element={<CreatePost />} />
                <Route path="search" element={<CreatePost />} />
              </Route>
              <Route path="/creators/:useID" element={<CreatorPosts />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile/:userID" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
