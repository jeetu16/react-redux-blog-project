import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/userSlice';

const AddAuthor = ({post}) => {

    const users = useSelector(selectAllUsers);
    const getAuthor = users.find(user => user.id===post.userId)
  return (
    <span>
       by { getAuthor ? getAuthor.name : "Unknown Author" }
    </span>
  )
}

export default AddAuthor