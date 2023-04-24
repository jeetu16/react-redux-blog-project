import React from 'react';
import AddAuthor from './AddAuthor';
import AddTime from './AddTime';
import ReactionButton from './ReactionButton';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deletePost } from './postSlice';



const PostsList = ({posts}) => {

  const dispatch = useDispatch();
    
    const allPosts = posts.map((post) => (
        <div className='post' key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 50)}</p>
            <AddAuthor post={post} />
            <AddTime timeStamp={post.date}/>
            <ReactionButton post ={post}/>
            <RiDeleteBinLine className='deleteBtn' onClick={() => dispatch(deletePost(post.id)) }/>
        </div>
    ));
  return (
    <div className='postContainer'>
        <h2>All Posts</h2>
        {allPosts}
    </div>
  )
}

export default PostsList