import React, { useEffect } from "react";
import PostsList from "./features/posts/PostsList";
import CreatePost from "./features/posts/CreatePost";
import { useSelector } from 'react-redux';
import { allPosts } from "./features/posts/postSlice";

function App() {

  const posts = useSelector(allPosts);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(posts))
  }, [posts])

  return (
    <div className="postList">
      <CreatePost />
      {
        posts.length
          ?
          <PostsList posts={posts} />
          :
          null
      }
    </div>
  )
}

export default App
